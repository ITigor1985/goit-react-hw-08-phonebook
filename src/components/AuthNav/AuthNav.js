import { Link, LinkList, LinkListItem } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <LinkList>
      <LinkListItem>
        <Link to="/register" exact="true">
          SignIn
        </Link>
      </LinkListItem>
      <LinkListItem>
        <Link to="/login" exact="true">
          LogIn
        </Link>
      </LinkListItem>
    </LinkList>
  );
};
export default AuthNav;
