import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSlice/contactSlice';
import { Navigate, useParams } from 'react-router-dom';

import {
  FullContact,
  BtnDeleteContact,
  Name,
  Number,
  Container,
} from './Contact.styled';

const Contact = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  let { id } = useParams();

  const getContact = contacts.find(contact => contact.id === id);

  return (
    <Container>
      <FullContact>
        <Name>{getContact.name}</Name>
        <Number>{getContact.number}</Number>
      </FullContact>
      <BtnDeleteContact onClick={() => deleteContact(id)} disabled={isDeleting}>
        {isDeleting && <Navigate to="/" />}
        Delete
      </BtnDeleteContact>
    </Container>
  );
};
export default Contact;
