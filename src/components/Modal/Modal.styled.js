import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';

export const StyledContainer = styled(ToastContainer)`
  font-size: 20px;
  letter-spacing: 0.1ch;
  text-transform: none;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  padding: 20px;
  border: thick double #32a1ce;
  border-radius: 5px;
  background-color: #ffffff;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: solid 1px #32a1ce;
  border-radius: 50%;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #32a1ce;
  }
`;
