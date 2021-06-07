import { createGlobalStyle } from "styled-components";
import MuseoLight from "common/fonts/museoLight.woff";
import MuseoRegularWoff from "common/fonts/museoRegular.woff";
import MuseoLightTrue from "common/fonts/museoRegular.ttf";
import MuseoRegularTrue from "common/fonts/MuseoSansCyrl-500.ttf";
import MuseoBoldTrue from "common/fonts/MuseoSansCyrl-700.ttf";
import MuseoBold from "common/fonts/museoBold.woff";

export const GlobalStyle = createGlobalStyle`

/* @font-face {
        font-family: 'Museo';
        src: local('Museo'), local('FontName'),
        url(${MuseoLight}) format('woff');
        font-weight: 300;
        font-style: normal;
    } */
@font-face {
    font-family: 'Museo';
    src: url(${MuseoLightTrue}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
@font-face {
    font-family: 'Museo';
    src: url(${MuseoRegularTrue}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
@font-face {
    font-family: 'Museo';
    src: url(${MuseoBoldTrue}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
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
