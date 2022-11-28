import { useSelector } from 'react-redux';
import { getFilterValue } from '../../redux/filterSlice';
import { ContactItem } from '../ContactItem/ContactItem';
import { Spinner } from '../Spinner/Spinner';
import noMatchesImg from '../../images/noMatches.png';
import { useGetContactsQuery } from '../../redux/contactsAPISlice';

const ContactList = () => {
  const enteredFilterValue = useSelector(getFilterValue);
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
          <h2 style={{ marginBottom: '10px' }}>Ooops... No matches!</h2>
          <img src={noMatchesImg} alt="Error" width={100} />
        </div>
      )}
    </>
  );
};

export default ContactList;
