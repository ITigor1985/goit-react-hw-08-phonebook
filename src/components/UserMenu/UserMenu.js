import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import { BtnExit, ContainerUserMenu, IconExit } from './UserMenu.styled';
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <ContainerUserMenu>
      <span>{name}</span>
      <BtnExit type="button" onClick={() => dispatch(authOperations.logOut())}>
        <IconExit />
      </BtnExit>
    </ContainerUserMenu>
  );
};
export default UserMenu;
