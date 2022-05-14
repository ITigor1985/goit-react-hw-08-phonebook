import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkList = styled.ul`
  display: flex;
  margin: 0px;
`;

export const LinkListItem = styled.li`
  margin-right: 10px;
  :last-child {
    margin-right: 0px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
