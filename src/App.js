import { Container, Root } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';
import RootStack from './navigation/RootStack';
import configureStore from './config/configureStore';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Root>
      <Container>
        <RootStack />
      </Container>
    </Root>
  </Provider>
);
