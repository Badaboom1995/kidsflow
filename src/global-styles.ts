import { createGlobalStyle } from "styled-components";
import MuseoLight from "common/fonts/museoLight.woff";
import MuseoRegular from "common/fonts/museoRegular.woff";
import MuseoBold from "common/fonts/museoBold.woff";

export const GlobalStyle = createGlobalStyle`

@font-face {
        font-family: 'Museo';
        src: local('Museo'), local('FontName'),
        url(${MuseoLight}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
@font-face {
        font-family: 'Museo';
        src: local('Museo'), local('FontName'),
        url(${MuseoRegular}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
@font-face {
        font-family: 'Museo';
        src: local('Museo'), local('FontName'),
        url(${MuseoBold}) format('woff');
        font-weight: 700;
        font-style: normal;
    }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body, a, button, pre {
    font-family: 'Museo', sans-serif;
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
