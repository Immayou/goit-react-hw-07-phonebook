import { useSelector } from 'react-redux';
import { getFilterValue } from '../../redux/filterSlice';
import { ContactItem } from '../ContactItem/ContactItem';
import { ListOfContacts } from './ContactList.styled';
import { useGetContactsQuery } from '../../redux/contactsAPISlice';

const ContactList = () => {
  const enteredFilterValue = useSelector(getFilterValue);
  const { data } = useGetContactsQuery();

  const normalizeFilter = enteredFilterValue.toLowerCase();
  const visibleContacts = data.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <ListOfContacts>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} item={contact} />
      ))}
    </ListOfContacts>
  );
};

export default ContactList;
