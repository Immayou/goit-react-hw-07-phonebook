import { useSelector } from 'react-redux';
import { getFilterValue } from '../../redux/filterSlice';
import { ContactItem } from '../ContactItem/ContactItem';
import { Spinner } from '../Spinner/Spinner';
import { useGetContactsQuery } from '../../redux/contactsAPISlice';

const ContactList = () => {
  const enteredFilterValue = useSelector(getFilterValue);
  const { data, isFetching } = useGetContactsQuery();
  const normalizeFilter = enteredFilterValue.toLowerCase();
  const visibleContacts = data.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
  const min = visibleContacts.length === 0;
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
      {min && <div>No matches</div>}
    </>
  );
};

export default ContactList;
