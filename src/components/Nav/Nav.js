import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Link } from './Nav.styled';

const Nav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {!isLoggedIn ? (
        <Link to="/" exact="true">
          Home
        </Link>
      ) : (
        <Link to="/contacts" exact="true">
          Phonebook
        </Link>
      )}
    </nav>
  );
};

export default Nav;
