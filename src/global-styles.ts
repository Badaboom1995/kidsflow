import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: linear-gradient(180deg, #FED98E 0%, #FDB67F 50%, #FD9693 100%);
  }

  body, a, button, pre {
    font-family: 'Mulish', sans-serif;
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
