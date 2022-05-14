import styled from 'styled-components';
import { ImExit } from 'react-icons/im';

export const ContainerUserMenu = styled.div`
  display: flex;
  align-items: center;
`;
export const BtnExit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: inherit;
  border: none;
`;

export const IconExit = styled(ImExit)`
  color: blue;
  width: 20px;
  height: 20px;
`;
