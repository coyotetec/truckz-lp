import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: #333;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
