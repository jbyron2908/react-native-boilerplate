import { Container, Root } from 'native-base';
import React from 'react';
import RootStack from './navigation/RootStack';

export default () => (
  <Root>
    <Container>
      <RootStack />
    </Container>
  </Root>
);
