import { Container } from 'native-base';
import React, { PureComponent } from 'react';
import localStorage from '../../../localStorage';
import localStorageKeys from '../../../localStorage/localStorageKeys';
import database from '../../../rxdb/database/database';

class EntryScreen extends PureComponent {
  async componentWillMount() {
    database.init();
    const { navigation } = this.props;
    const token = await localStorage.load(localStorageKeys.TOKEN);
    if (token) {
      navigation.navigate('RxDB');
    } else {
      navigation.navigate('Login');
    }
  }

  render() {
    return <Container />;
  }
}

export default EntryScreen;
