import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { TiPhoneOutline } from 'react-icons/ti';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetContactsQuery } from '../../redux/contactsAPISlice';
import { useAddContactMutation } from '../../redux/contactsAPISlice';
import {
  Title,
  PhoneForm,
  NameLabel,
  InputNameField,
  NumberLabel,
  InputNumberField,
  FormButton,
} from './ContactForm.styled';

const ContactForm = () => {
  const { data } = useGetContactsQuery();
  const [newContact, { isLoading }] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const notifySuccess = () => {
    toast.success('New contact is added !', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const notifyError = text => {
    toast.error(`${text} already exists in contacts!`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

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

  const handleSubmit = async e => {
    e.preventDefault();

    const contactToAdd = {
      name,
      phone: number,
    };

    const checkIfNewContactAlreadyExists = data.find(
      ({ name }) => name.toLowerCase() === contactToAdd.name.toLowerCase()
    );

    checkIfNewContactAlreadyExists
      ? notifyError(contactToAdd.name)
      : (await newContact(contactToAdd)) && notifySuccess();

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <PhoneForm onSubmit={handleSubmit}>
      <ToastContainer />
      <Title>
        <TiPhoneOutline size={33} /> Phonebook
      </Title>
      <NameLabel htmlFor={nameInputId}>Name</NameLabel>
      <InputNameField
        id={nameInputId}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleInput}
        required
      />
      <NumberLabel htmlFor={numberInputId}>Number</NumberLabel>
      <InputNumberField
        id={numberInputId}
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleInput}
        required
      />
      <FormButton type="submit" disabled={isLoading}>
        Add contact
      </FormButton>
    </PhoneForm>
  );
};

export default ContactForm;
