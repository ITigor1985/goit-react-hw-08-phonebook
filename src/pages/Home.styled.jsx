import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
  height: 400px;
`;

export const NameApp = styled.h1`
  color: blue;
  font-size: 26px;
`;
