import { createGlobalStyle } from 'styled-components';
import V from './variables';

const GlobalStyle = createGlobalStyle`
  *,::before,::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Montserrat', 'sans-serif';
    color: ${V.colorWhite};
    position: relative;
  }


`;

export default GlobalStyle;
