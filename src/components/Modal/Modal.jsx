import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { nanoid } from '@reduxjs/toolkit';
import {
  Overlay,
  ModalWindow,
  ModalForm,
  ModalBox,
} from '../Modal/Modal.styled';
import { ContactButton } from '../ContactItem/ContactItem.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onModalClose, children }) => {
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

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const contactToEdit = {
      name: e.currentTarget.elements.name.value,
      phone: e.currentTarget.elements.number.value,
    };

    console.log(e.currentTarget.elements.name.value);
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <ModalForm onSubmit={handleFormSubmit}>
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
