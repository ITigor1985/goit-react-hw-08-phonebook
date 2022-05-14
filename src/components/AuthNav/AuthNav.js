import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" exact="true">
        Регистрация
      </NavLink>
      <NavLink to="/login" exact="true">
        Логин
      </NavLink>
    </div>
  );
};
export default AuthNav;
