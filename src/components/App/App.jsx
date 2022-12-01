import { useGetContactsQuery } from '../../redux/contactsAPISlice';
import TopBox from '../TopBox/TopBox';
import BottomBox from '../BottomBox/BottomBox';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Spinner } from '../Spinner/Spinner';
import errorImg from '../../images/error.png';
import emptyPhonebookImg from '../../images/no_contacts.png';
import {
  MainWrapper,
  ContactsTitle,
  Layout,
  Header,
  NoContactsSectionTitle,
  ErrorSectionTitle,
  ErrorSectionText,
} from './App.styled';

export const App = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const isNotContactListEmpty = data && data.length > 0;

  return (
    <Layout>
      <Header>
        <button>Home</button>
        <button>Register</button>
        <button>Log in</button>
      </Header>
      <MainWrapper>
        <TopBox>
          <ContactForm />
        </TopBox>
        {isNotContactListEmpty && (
          <BottomBox>
            <div>
              <ContactsTitle>Contacts</ContactsTitle>
              <Filter />
              <ContactList />
            </div>
          </BottomBox>
        )}
        {!isNotContactListEmpty && !error && !isLoading && (
          <BottomBox>
            <div>
              <NoContactsSectionTitle>No contacts yet!</NoContactsSectionTitle>
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
            <div>
              <ErrorSectionTitle>
                Sorry, something went wrong!
              </ErrorSectionTitle>
              <ErrorSectionText style={{ marginBottom: '10px' }}>
                Error loading the contacts
              </ErrorSectionText>
              <img src={errorImg} alt="Error" width={100} />
            </div>
          </BottomBox>
        )}
      </MainWrapper>
    </Layout>
  );
};
