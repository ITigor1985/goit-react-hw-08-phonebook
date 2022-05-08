import propTypes from 'prop-types';
import { Name, BoxContact, ContactLink } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, phone }) => {
  return (
    <BoxContact>
      <ContactLink to={`/contacts/${id}`} id={id} name={name} phone={phone}>
        <Name>{name}</Name>
      </ContactLink>
    </BoxContact>
  );
};

ContactListItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  phone: propTypes.string.isRequired,
};
