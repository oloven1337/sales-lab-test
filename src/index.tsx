import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components'

import { App } from './App';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    padding: 36px 20px 0;
    width: 1225px;
    font-family: Lato, sans-serif;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <App/>
    <GlobalStyle/>
  </>
);
