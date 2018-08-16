import { Container } from 'native-base';
import React, { PureComponent } from 'react';
import database from '../../../rxdb/database/database';
import storage from '../../../storage/storage';
import storageKeys from '../../../storage/storageKeys';

class EntryScreen extends PureComponent {
  async componentWillMount() {
    database.init();
    const { navigation } = this.props;
    const token = await storage.load(storageKeys.TOKEN);
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
