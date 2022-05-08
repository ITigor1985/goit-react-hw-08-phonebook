import { PageButton } from './Button.styled';
import propTypes from 'prop-types';
const Button = ({ type, text, onClick }) => {
  return (
    <PageButton type={type} onClick={onClick}>
      {text}
    </PageButton>
  );
};
export default Button;

Button.propTypes = {
  type: propTypes.string.isRequired,
  onClick: propTypes.func,
  text: propTypes.string,
};
