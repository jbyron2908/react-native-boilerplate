import { StyleProvider } from 'native-base';
import React from 'react';
import App from '../src/App';
import getTheme from './theme/components';
import variables from './theme/variables/material';


export default () => (
  <StyleProvider style={getTheme(variables)}>
    <App />
  </StyleProvider>
);
