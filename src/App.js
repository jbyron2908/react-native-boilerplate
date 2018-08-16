import { Container, Root } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';
import debugConfig from './config/debugConfig';
import { store } from './config/reduxStore';
import NavigatorService from './views/navigation/NavigatorService';
import RootNavigator from './views/navigation/RootNavigator';

debugConfig();

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
