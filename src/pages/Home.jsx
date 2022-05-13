import { Link } from 'react-router-dom';
import { Icon } from './Home.styled';
import icon from '../images/icon-phone.png';
import { Container } from './Home.styled';

export const HomePage = () => {
  return (
    <>
      <Container>
        <Link to="/contacts">
          <Icon src={icon} width="40px" height="40px" alt="icon contacts" />
        </Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </Container>
    </>
  );
};