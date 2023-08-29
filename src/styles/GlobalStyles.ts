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
    color: ${({ theme }) => theme.colors.white[100]};
    font-size: 1rem;
    font-family: 'Manrope', sans-serif;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }

    /* body {
      overflow-y: hidden;
  } */

  }
`;
