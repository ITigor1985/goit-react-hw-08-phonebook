import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSlice/contactSlice';
import { Navigate, useParams } from 'react-router-dom';

import { FullContact, BtnDeleteContact } from './Contact.styled';

const Contact = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  let { id } = useParams();

  const getContact = contacts.find(contact => contact.id === id);

  return (
    <>
      <FullContact>
        <li>{getContact.name}</li>
        <li>{getContact.number}</li>
      </FullContact>
      <BtnDeleteContact onClick={() => deleteContact(id)} disabled={isDeleting}>
        {isDeleting && <Navigate to="/" />}
        Delete
      </BtnDeleteContact>
    </>
  );
};
export default Contact;
