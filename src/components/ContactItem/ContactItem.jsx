import { useState } from 'react';
import {
  useDeleteContactMutation,
  useGetContactsByIdQuery,
} from '../../redux/contactsAPISlice';
import { ToastContainer } from 'react-toastify';
import {
  notifySuccessDeletedInfo,
  notifyError,
} from '../../../src/notificationMessages/notificationMessages';
import { Modal } from '../Modal/Modal';
import {
  ContactSimpleItem,
  NameInfo,
  NumberInfo,
  ContactButton,
} from './ContactItem.styled';

export const ContactItem = ({ item }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { data } = useGetContactsByIdQuery(item.id);

  const onDeleteContactHandler = async () => {
    try {
      await deleteContact(item.id);
      notifySuccessDeletedInfo(item.name);
    } catch (error) {
      notifyError();
    }
  };

  const onEditButtonClick = () => {
    setIsOpenModal(true);
  };

  const onModalClose = async () => {
    setIsOpenModal(false);
    try {
      await data;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <ContactSimpleItem>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <NameInfo>{item.name}: </NameInfo>
          <NumberInfo>{item.phone}</NumberInfo>
        </div>
        <div style={{ display: 'flex' }}>
          <ContactButton
            type="button"
            style={{ marginRight: '5px' }}
            onClick={() => onEditButtonClick()}
          >
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
      {isOpenModal && <Modal onModalClose={onModalClose} dataContact={data} />}
    </>
  );
};
