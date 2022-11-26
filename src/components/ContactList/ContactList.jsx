import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/contactSlice';
import { getFilterValue } from '../../redux/filterSlice';
import {
  ListOfContacts,
  ContactItem,
  NameInfo,
  NumberInfo,
  DeleteButton,
} from './ContactList.styled';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsAPISlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const enteredFilterValue = useSelector(getFilterValue);
  const { data, error, isLoading } = useGetContactsQuery();
  const [deleteContact, result] = useDeleteContactMutation();

  console.log(data);
  console.log(isLoading);
  console.log(error);

  const normalizeFilter = enteredFilterValue.toLowerCase();
  const visibleContacts = data.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <ListOfContacts>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <div>
            <NameInfo>{name}: </NameInfo>
            <NumberInfo>{number}</NumberInfo>
          </div>
          <DeleteButton type="button" onClick={() => deleteContact(id)}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ListOfContacts>
  );
};

export default ContactList;
