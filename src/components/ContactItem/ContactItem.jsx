import { useDeleteContactMutation } from '../../redux/contactsAPISlice';
import { ToastContainer } from 'react-toastify';
import {
  notifySuccessDeletedInfo,
  notifyError,
} from '../../../src/notificationMessages/notificationMessages';
import {
  ContactSimpleItem,
  NameInfo,
  NumberInfo,
  ContactButton,
} from './ContactItem.styled';

export const ContactItem = ({ item }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const onDeleteContactHandler = async () => {
    try {
      await deleteContact(item.id);
      notifySuccessDeletedInfo(item.name);
    } catch (error) {
      notifyError();
    }
  };
  return (
    <>
      <ToastContainer />
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
            onClick={onDeleteContactHandler}
          >
            {isLoading ? 'Deleting' : 'Delete'}
          </ContactButton>
        </div>
      </ContactSimpleItem>
    </>
  );
};
