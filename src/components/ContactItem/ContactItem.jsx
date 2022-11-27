import { useDeleteContactMutation } from '../../redux/contactsAPISlice';
import {
  ContactSimpleItem,
  NameInfo,
  NumberInfo,
  ContactButton,
} from './ContactItem.styled';

export const ContactItem = ({ item }) => {
  const [deleteContact, { isLoading, error }] = useDeleteContactMutation();
  if (error) {
    console.log(1);
  }

  return (
    <>
      <ContactSimpleItem>
        <div>
          <NameInfo>{item.name}: </NameInfo>
          <NumberInfo>{item.number}</NumberInfo>
        </div>
        <div style={{ display: 'flex' }}>
          <ContactButton type="button" style={{ marginRight: '5px' }}>
            Edit
          </ContactButton>
          <ContactButton
            type="button"
            disabled={isLoading}
            onClick={() => deleteContact(item.id)}
          >
            {isLoading ? 'Deleting' : 'Delete'}
          </ContactButton>
        </div>
      </ContactSimpleItem>
    </>
  );
};
