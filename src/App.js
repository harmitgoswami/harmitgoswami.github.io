import React from 'react';
import IndexPage from './pages/index';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <IndexPage />
    </>
  );
}

export default App;
