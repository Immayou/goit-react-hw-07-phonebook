import { useGetContactsQuery } from '../../redux/contactsAPISlice';
import ContainerBox from '../ContainerBox/ContainerBox';
import TopBox from '../TopBox/TopBox';
import BottomBox from '../BottomBox/BottomBox';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Spinner } from '../Spinner/Spinner';
import errorImg from '../../images/error.png';
import { Wrapper, ContactsTitle } from './App.styled';

export const App = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const isContactListEmpty = data && data.length > 0;

  return (
    <Wrapper>
      <ContainerBox>
        <TopBox>
          <ContactForm />
        </TopBox>
        {isContactListEmpty && (
          <BottomBox>
            <div>
              <ContactsTitle>Contacts</ContactsTitle>
              <Filter />
              <ContactList />
            </div>
          </BottomBox>
        )}
        {isLoading && (
          <div>
            <Spinner />
          </div>
        )}
        {error && (
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
      </ContainerBox>
    </Wrapper>
  );
};
