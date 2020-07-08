import React from 'react';

// import { ThemeProvider } from 'styled-components';
// import dark from './styles/themes/dark';
import GlobalStyles from './styles/GlobalStyles';
// import * as S from './styles/styled';
import Hero from './components/Hero/index';
import Portfolio from './components/Portfolio/index';
import About from './components/About';
import Contact from './components/Contact';

const App = () => (
  <>
    <GlobalStyles />
    <Hero />
    <Portfolio />
    <About />
    <Contact />
  </>
);

export default App;
