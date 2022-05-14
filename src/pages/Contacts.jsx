import { useFetchContactsQuery } from '../redux/contactsSlice/contactSlice';
import { ContactList } from 'components/ContactList/ContactList';
import { Spinner } from 'components/Spinner/Spinner';
import Filter from 'components/Filter';
import { Container, ContainerContacts } from './Contacts.styled';
import { Link } from 'react-router-dom';

export const ContactsPage = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  // const totalContacts = () => {
  //   if (contacts) {
  //     return `Total contacts: ${contacts.length}`;
  //   } else return;
  // };

  return (
    <>
      <Container>
        <Filter />
        <ContainerContacts>
          {/* <h1>Contacts</h1> */}
          {isFetching && <Spinner />}
          {/* {totalContacts()} */}
          {contacts && <ContactList contacts={contacts} />}
        </ContainerContacts>
        <button
          type="button"
          style={{
            width: '98%',
            margin: '0 auto',
            position: 'relative',
            top: '25px',
          }}
        >
          <Link to="/contacts/create">Create contacts</Link>
        </button>
      </Container>
    </>
  );
};
