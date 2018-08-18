import { Container, Text, View } from 'native-base';
import React, { PureComponent } from 'react';
import Translator from '../../../i18n/Translator';

class I18nScreen extends PureComponent {
  render() {
    return (
      <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text>{Translator.t('greetings')}</Text>
        </View>
      </Container>);
  }
}

export default I18nScreen;
