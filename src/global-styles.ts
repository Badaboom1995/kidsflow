import { createGlobalStyle } from "styled-components";

import stars from "assets/stars.svg";

export const GlobalStyle = createGlobalStyle`

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-image: url(${stars});
  }

  body, a, button, pre {
    font-family: 'Montserrat', sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }
  a{
    text-decoration: none;
  }
  p,
  label {
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
