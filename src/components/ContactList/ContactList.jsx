import { useSelector } from 'react-redux';
import { selectFilterValue } from '../../redux/filterSlice';
import { ContactItem } from '../ContactItem/ContactItem';
import { Spinner } from '../Spinner/Spinner';
import noMatchesImg from '../../images/noMatches.png';
import { useGetContactsQuery } from '../../redux/contactsAPISlice';
import { NoMatchesSectionTitle } from '../ContactList/ContactList.styled';

const ContactList = () => {
  const enteredFilterValue = useSelector(selectFilterValue);
  const { data, isFetching } = useGetContactsQuery();
  const normalizeFilter = enteredFilterValue.toLowerCase();
  const visibleContacts = data.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
  const noMatches = visibleContacts.length === 0;
  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : (
        <ul>
          {visibleContacts.map(contact => (
            <ContactItem key={contact.id} item={contact} />
          ))}
        </ul>
      )}
      {noMatches && (
        <div>
          <NoMatchesSectionTitle>Ooops... No matches!</NoMatchesSectionTitle>
          <img src={noMatchesImg} alt="Error" width={100} />
        </div>
      )}
    </>
  );
};

export default ContactList;
