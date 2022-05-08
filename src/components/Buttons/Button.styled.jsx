import styled from 'styled-components';

export const PageButton = styled.button`
  display: block;

  margin: 0 auto;
  text-decoration: none;
  position: relative;
  font-size: 16px;
  line-height: 16px;
  padding: 8px 20px;
  color: #337ab7;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', Тahoma, sans-serif;
  background: #fff;
  cursor: pointer;

  overflow: hidden;
  z-index: 1;
  transition: color 0.5s;

  :hover,
  :active,
  :focus {
    color: #fff;
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: -50px;
    bottom: 0;
    left: 0;
    border-right: 50px solid transparent;
    border-top: 50px solid #2d6b9f;
    transition: transform 0.5s;
    transform: translateX(-100%);
    z-index: -1;
  }

  :hover:before,
  :active:before,
  :focus:before {
    transform: translateX(0);
  }
`;
