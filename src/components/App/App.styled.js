import styled from '@emotion/styled';

export const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0 20px 0;
`;
export const ContactsTitle = styled.h2`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.33;
  margin-bottom: 20px;
`;
export const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(45deg, #eecfba, #c5dde8);
`;

export const Header = styled.header`
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const NoContactsSectionTitle = styled.h2`
  letter-spacing: 0.1ch;
  font-size: 30px;
  margin-bottom: 10px;
`;

export const ErrorSectionTitle = styled.h2`
  letter-spacing: 0.1ch;
  font-size: 30px;
  margin-bottom: 10px;
`;

export const ErrorSectionText = styled.p`
  letter-spacing: 0.1ch;
  font-size: 25px;
  margin-bottom: 10px;
`;
