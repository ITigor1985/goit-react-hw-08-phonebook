import propTypes from 'prop-types';
import { Name, BoxContact, ContactLink } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  return (
    <BoxContact>
      <ContactLink to={`/contacts/${id}`} id={id} name={name} number={number}>
        <Name>{name}</Name>
      </ContactLink>
    </BoxContact>
  );
};

ContactListItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};
