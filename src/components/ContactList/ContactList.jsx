import propTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { selectFilter } from 'redux/filterSlice/fiterSlice';
import { useSelector } from 'react-redux';
import { ListContacts } from './ContactList.styled';
import { authSelectors } from 'redux/auth';
import { useEffect } from 'react';
import { useFetchContactsQuery } from 'redux/contactsSlice/contactSlice';

export const ContactList = ({ contacts }) => {
  const filter = useSelector(selectFilter);
  const { refetch } = useFetchContactsQuery();
  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    refetch();
  }, [token, refetch]);

  const getFiltredContacts = () => {
    return filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  const filtredContacts = getFiltredContacts();

  return (
    <ListContacts>
      {filtredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ListContacts>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ).isRequired,
};
