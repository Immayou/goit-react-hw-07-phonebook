import { useDeleteContactMutation } from '../../redux/contactsAPISlice';
import {
  ContactSimpleItem,
  NameInfo,
  NumberInfo,
  DeleteButton,
} from './ContactItem.styled';

export const ContactItem = ({ item }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ContactSimpleItem>
      <div>
        <NameInfo>{item.name}: </NameInfo>
        <NumberInfo>{item.number}</NumberInfo>
      </div>
      <DeleteButton
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(item.id)}
      >
        {isLoading ? 'Deleting' : 'Delete'}
      </DeleteButton>
    </ContactSimpleItem>
  );
};
