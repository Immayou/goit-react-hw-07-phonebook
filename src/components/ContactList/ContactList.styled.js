import styled from '@emotion/styled'

export const ListOfContacts = styled.ul`
width: 350px;
margin: 0 auto 20px auto;
padding: 10px;
`

export const ContactItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
font-size: 20px;
font-weight:500;
line-height: 1.17;
:not(:last-child) {
    margin-bottom: 15px;
}
`

export const NameInfo= styled.span`
margin-right: 5px;
`
export const NumberInfo= styled.span`
margin-right: 0;
`

export const DeleteButton = styled.button`
width: 60px;
min-height: 25px;
border-radius: 5px;
border: 1px solid gray;
background-color: lightgray;
transition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1), background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1), border 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

:hover, :focus {
background-color: lightblue;
border: 1px solid #000;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
}
`