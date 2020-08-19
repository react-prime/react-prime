import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    background-color: rgb(247, 250, 252);
    box-sizing: border-box;
    color: rgb(74, 85, 104);
    font-family: 'Rubik',-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }
`;

export default globalStyle;
