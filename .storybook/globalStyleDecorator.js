import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import baseTheme from '../src/themes/base';

const GlobalStyle = createGlobalStyle`
  #root * {
    font-family: Menlo,'Courier New',Courier,monospace;
  }
`;

export default (storyFn) => (
  <ThemeProvider theme={baseTheme}>
    <React.Fragment>
      <GlobalStyle />
      { storyFn() }
    </React.Fragment>
  </ThemeProvider>
);