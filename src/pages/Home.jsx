import { Link } from 'react-router-dom';
import { Container } from './Home.styled';

export const HomePage = () => {
  return (
    <>
      <Container>
        <p>Phone Book for your`s contacts</p>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </Container>
    </>
  );
};
