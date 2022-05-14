import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const Nav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {!isLoggedIn ? (
        <NavLink to="/" exact="true">
          Главная
        </NavLink>
      ) : (
        <NavLink to="/contacts" exact="true">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;
