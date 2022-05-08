import styled from 'styled-components';
import icons from '../images/icons.png';

export const Icon = styled.img`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

export const Contayner = styled.div`
  background: url(${icons});
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
  background-position: 50%;
  width: 300px;
  height: 400px;
`;
