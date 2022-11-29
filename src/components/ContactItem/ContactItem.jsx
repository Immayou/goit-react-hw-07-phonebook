import { useState } from 'react';
import { useDeleteContactMutation } from '../../redux/contactsAPISlice';
import { ToastContainer } from 'react-toastify';
import { TiContacts } from 'react-icons/ti';
import { notifySuccessDeletedInfo } from '../../../src/notificationMessages/notificationMessages';
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

  const onDeleteContactHandler = async () => {
    try {
      await deleteContact(item.id);
      notifySuccessDeletedInfo(item.name);
    } catch (error) {
      console.log(error);
    }
  };

  const onEditButtonHandlerClick = e => {
    e.preventDefault();
    setIsOpenModal(true);
  };

  const onModalClose = async () => {
    setIsOpenModal(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <ToastContainer />
      <ContactSimpleItem>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TiContacts size={30} style={{ marginRight: '10px' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NameInfo>{item.name}: </NameInfo>
            <NumberInfo>{item.phone}</NumberInfo>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <ContactButton
            type="button"
            style={{ marginRight: '5px' }}
            onClick={onEditButtonHandlerClick}
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
      {isOpenModal && <Modal onModalClose={onModalClose} dataContact={item} />}
    </>
  );
};
