import { useGetContactsQuery } from '../../redux/contactsAPISlice';
import TopBox from '../TopBox/TopBox';
import BottomBox from '../BottomBox/BottomBox';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Spinner } from '../Spinner/Spinner';
import errorImg from '../../images/error.png';
import emptyPhonebookImg from '../../images/no_contacts.png';
import { Wrapper, ContactsTitle } from './App.styled';

export const App = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const isNotContactListEmpty = data && data.length > 0;

  return (
    <Wrapper style={{ padding: '20px 0' }}>
      <TopBox>
        <ContactForm />
      </TopBox>
      {isNotContactListEmpty && !isLoading && (
        <BottomBox>
          <div style={{ padding: '10px' }}>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter />
            <ContactList />
          </div>
        </BottomBox>
      )}
      {!isNotContactListEmpty && !isLoading && (
        <BottomBox>
          <div style={{ padding: '10px' }}>
            <h2 style={{ marginBottom: '10px' }}>No contacts yet!</h2>
            <p style={{ marginBottom: '10px' }}>
              Add contacts to your phonebook
            </p>
            <img src={emptyPhonebookImg} alt="No contacts" width={100} />
          </div>
        </BottomBox>
      )}
      {isLoading && (
        <div>
          <Spinner />
        </div>
      )}
      {error && !isLoading && (
        <BottomBox>
          <div style={{ padding: '10px' }}>
            <h2 style={{ marginBottom: '10px' }}>
              Sorry, something went wrong!
            </h2>
            <p style={{ marginBottom: '10px' }}>Error loading the contacts</p>
            <img src={errorImg} alt="Error" width={100} />
          </div>
        </BottomBox>
      )}
    </Wrapper>
  );
};
