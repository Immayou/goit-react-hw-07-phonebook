import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { nanoid } from '@reduxjs/toolkit';
import { IoCloseSharp } from 'react-icons/io5';
import {
  useEditContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsAPISlice';
import {
  notifyError,
  notifySuccessEditedInfo,
} from '../../../src/notificationMessages/notificationMessages';
import {
  Overlay,
  ModalWindow,
  ModalForm,
  ModalBox,
  ModalCloseButton,
} from '../Modal/Modal.styled';
import { ContactButton } from '../ContactItem/ContactItem.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onModalClose, dataContact }) => {
  document.body.style.overflow = 'hidden';
  const [editContact] = useEditContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const [name, setName] = useState(dataContact.name);
  const [number, setNumber] = useState(dataContact.phone);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  const handleInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  const handleEditContactFormSubmit = async e => {
    e.preventDefault();
    await contacts;
    const contactToEdit = {
      id: dataContact.id,
      name,
      phone: number,
    };

    const checkIfEditedContactAlreadyExists = contacts.find(
      ({ name, id }) =>
        name.toLowerCase() === contactToEdit.name.toLowerCase() &&
        contactToEdit.id !== id
    );

    if (checkIfEditedContactAlreadyExists) {
      notifyError(contactToEdit.name);
    } else {
      await editContact(contactToEdit);
      notifySuccessEditedInfo(contactToEdit.name);
    }

    document.body.style.overflow = '';
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <ModalCloseButton type="button" onClick={onModalClose}>
          <IoCloseSharp size={20} />
        </ModalCloseButton>
        <ModalForm onSubmit={handleEditContactFormSubmit}>
          <ModalBox>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '10px',
              }}
            >
              <label htmlFor={nameInputId}>Name</label>
              <input
                style={{ width: '300px' }}
                id={nameInputId}
                type="text"
                name="name"
                value={name}
                onChange={handleInput}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor={numberInputId}>Number</label>
              <input
                id={numberInputId}
                style={{ width: '300px' }}
                type="tel"
                name="number"
                value={number}
                onChange={handleInput}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </div>
          </ModalBox>
          <ContactButton type="submit" style={{ margin: '0 auto' }}>
            Edit contact
          </ContactButton>
        </ModalForm>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
