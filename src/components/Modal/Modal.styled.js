import styled from '@emotion/styled';

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
