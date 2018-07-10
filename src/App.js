import { Container, Root } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './config/configureStore';
import RootStack from './navigation/RootStack';

const { store, persistor } = configureStore();

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Root>
        <Container>
          <RootStack />
        </Container>
      </Root>
    </PersistGate>
  </Provider>
);
