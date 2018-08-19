import { Container, Root } from 'native-base';
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import debugConfig from './config/debugConfig';
import { store } from './redux/config/reduxStore';
import NavigatorService from './views/navigation/NavigatorService';
import RootNavigator from './views/navigation/RootNavigator';
import database from './rxdb/database/database';

debugConfig();

const setNavigator = (navigatorRef) => {
  NavigatorService.setNavigator(navigatorRef);
};


export default class App extends PureComponent {
  async componentWillMount() {
    await database.init();
  }

  render() {
    return (
      <Provider store={store}>
        <Root>
          <Container>
            <RootNavigator ref={navigatorRef => setNavigator(navigatorRef)} />
          </Container>
        </Root>
      </Provider>);
  }
}

