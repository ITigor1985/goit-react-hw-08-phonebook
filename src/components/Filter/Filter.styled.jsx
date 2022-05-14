import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
`;

export const InputeFilter = styled.input`
  width: 100%;
  border: none;
  border-radius: 30px;
  height: 30px;
  padding-left: 10px;
  outline: 0px;
  :focus {
    outline: 2px solid grey;
  }
`;
