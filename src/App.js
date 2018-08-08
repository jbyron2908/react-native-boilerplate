import { Container, Root } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './config/reduxStore';
import RootNavigator from './navigation/RootNavigator';
import NavigatorService from './navigation/NavigatorService';

const setNavigator = (navigatorRef) => {
  NavigatorService.setNavigator(navigatorRef);
};

export default () => (
  <Provider store={store}>
    <Root>
      <Container>
        <RootNavigator ref={navigatorRef => setNavigator(navigatorRef)} />
      </Container>
    </Root>
  </Provider>
);
