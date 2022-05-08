import styled from 'styled-components';
import phone from '../images/phone.png';

export const Container = styled.div`
  position: relative;

  padding-bottom: 30px;
  width: 100%;
  height: 700px;
  margin: 0 auto;
  background-size: contain;
  background: url(${phone});
  background-repeat: no-repeat;
  background-position: top;
  background-size: 365px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
