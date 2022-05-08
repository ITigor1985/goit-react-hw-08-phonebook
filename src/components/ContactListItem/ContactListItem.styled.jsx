import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Name = styled.p`
  font-size: 20px;
  display: inline-block;
  display: block;
  padding: 10px;
  color: white;

  border-bottom: 1px solid white;
`;

export const Phone = styled.p`
  font-size: 24px;
  display: inline-block;
  margin-right: 15px;
`;
export const BoxContact = styled.li``;
export const ContactLink = styled(Link)`
  text-decoration: none;
`;
