import { Link } from 'react-router-dom';
import { Icon } from './Home.styled';
import icon from '../images/icon-phone.png';
import { Contayner } from './Home.styled';

export const HomePage = () => {
  return (
    <>
      <Contayner>
        <Link to="/contacts">
          <Icon src={icon} width="40px" height="40px" alt="icon contacts" />
        </Link>
      </Contayner>
    </>
  );
};
