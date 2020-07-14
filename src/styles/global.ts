import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: grid;
    place-items: center;
    height: 100vh;
    background: #121212;
  }
`;
