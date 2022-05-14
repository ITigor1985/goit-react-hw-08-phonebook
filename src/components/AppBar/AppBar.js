import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { authSelectors } from 'redux/auth';
import Nav from 'components/Nav';
import { Container, Header } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container>
      <Header>
        <Nav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </Container>
  );
};

export default AppBar;
