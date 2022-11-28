import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { nanoid } from '@reduxjs/toolkit';
import {
  useGetContactsByIdQuery,
  useEditContactMutation,
} from '../../redux/contactsAPISlice';
import {
  Overlay,
  ModalWindow,
  ModalForm,
  ModalBox,
} from '../Modal/Modal.styled';
import { ContactButton } from '../ContactItem/ContactItem.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onModalClose, contactIdQuery }) => {
  const { data } = useGetContactsByIdQuery(contactIdQuery);
  const [editContact] = useEditContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
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
    const contactToEdit = {
      id: contactIdQuery,
      name,
      phone: number,
    };
    try {
      await editContact(contactToEdit);
    } catch (error) {
      console.log(error.message);
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      {data && (
        <ModalWindow>
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
                  value={data.name}
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
                  value={data.phone}
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
      )}
    </Overlay>,
    modalRoot
  );
};
