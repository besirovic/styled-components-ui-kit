import React from 'react';
import { ThemeProvider } from 'styled-components';
import { configure, addDecorator } from '@storybook/react';

import GlobalStyle from '../src/components/GlobalStyle';

import baseTheme from '../src/themes/base';

addDecorator(storyFn => (
  <ThemeProvider theme={baseTheme}>
    <React.Fragment>
      <GlobalStyle />
      { storyFn() }
    </React.Fragment>
  </ThemeProvider>
));

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
