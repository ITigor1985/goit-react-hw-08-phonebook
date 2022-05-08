import propTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { selectFilter } from 'redux/filterSlice/fiterSlice';
import { useSelector } from 'react-redux';
import { ListContacts } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  const filter = useSelector(selectFilter);

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
      {filtredContacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ListContacts>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
      phone: propTypes.string.isRequired,
    })
  ).isRequired,
};
