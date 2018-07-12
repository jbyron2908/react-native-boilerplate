import { Container, Root } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from './config/reduxStore';
import RootStack from './navigation/RootStack';

const { store, persistor } = reduxStore;

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
