import { Container, Button, Text, View } from 'native-base';
import React, { PureComponent } from 'react';
import NavigatorService from '../../navigation/NavigatorService';

class EntryScreen extends PureComponent {
  render() {
    return (
      <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Button onPress={() => NavigatorService.navigate('I18n')}>
            <Text>I18n Example</Text>
          </Button>
        </View>
      </Container>);
  }
}

export default EntryScreen;
