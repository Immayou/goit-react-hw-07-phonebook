import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySuccess = () => {
  toast.success('New contact is added!', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
};

export const notifySuccessDeletedInfo = text => {
  toast.info(`${text} is deleted from contacts!`, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
};

export const notifySuccessEditedInfo = text => {
  toast.info(`${text} is edited!`, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
};

export const notifyError = text => {
  toast.error(`${text} already exists in contacts!`, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
};
