import styled from '@emotion/styled';

export const ContactSimpleItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: start;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.17;
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const NameInfo = styled.span`
  font-style: italic;
  font-size: 25px;
`;

export const NumberInfo = styled.span`
  font-size: 20px;
`;

export const ContactButton = styled.button`
  width: 60px;
  min-height: 25px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: lightgray;
  transition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1),
    border 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover,
  :focus {
    background-color: lightblue;
    border: 1px solid #000;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
