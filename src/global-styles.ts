import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* @font-face {
    font-family: 'Montserrat';
    src: url('./fonrmontserrat-light-webfont.woff2') format('woff2'),
         url('./fonrmontserrat-light-webfont.woff') format('woff'),
         url('./fonrmontserrat-light-webfont.ttf') format('truetype');
    font-weight: 300;
}
@font-face {
    font-family: 'Montserrat';
    src: url('./fonrmontserrat-medium-webfont.woff2') format('woff2'),
         url('./fonrmontserrat-medium-webfont.woff') format('woff'),
         url('./fonrmontserrat-medium-webfont.ttf') format('truetype');
    font-weight: 400;

}
@font-face {
    font-family: 'Montserrat';
    src: url('./fonrmontserrat-regular-webfont.woff2') format('woff2'),
         url('./fonrmontserrat-regular-webfont.woff') format('woff'),
         url('./fonrmontserrat-regular-webfont.ttf') format('truetype');
    font-weight: 500;

} */

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body, a, button, pre {
    font-family: 'Montserrat', sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
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
