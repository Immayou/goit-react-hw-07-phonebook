import { useSelector } from 'react-redux';

import { getContacts } from '../../redux/contactSlice';

import ContainerBox from '../ContainerBox/ContainerBox';

import Box from '../Box/Box';

import ContactForm from '../ContactForm/ContactForm';

import ContactList from '../ContactList/ContactList';
import { useGetContactsQuery } from '../../redux/contactsAPISlice';

import Filter from '../Filter/Filter';

import { Wrapper, ContactsTitle } from './App.styled';

export const App = () => {
  const addedContacts = useSelector(getContacts);
  const { data, error, isLoading } = useGetContactsQuery();

  const isArrayOfContactsEmpty = data.length !== 0;

  return (
    <Wrapper>
      <ContainerBox>
        <Box>
          <ContactForm />
          {isArrayOfContactsEmpty && (
            <div>
              <ContactsTitle>Contacts</ContactsTitle>
              <Filter />
              <ContactList />
            </div>
          )}
        </Box>
      </ContainerBox>
    </Wrapper>
  );
};
