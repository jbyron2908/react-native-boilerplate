import { Body, Button, Container, Text } from 'native-base';
import React from 'react';
import { Actions } from 'react-native-router-flux';


export default () => (
  <Container style={{ marginTop: 20, backgroundColor: 'transparent' }}>
    <Body>
      <Button
        primary
        onPress={() => Actions.Second()}
      >
        <Text>Open Second Screen</Text>
      </Button>
      <Button
        primary
        onPress={() => Actions.MyModal()}
      >
        <Text>Open modal</Text>
      </Button>
      <Button
        primary
        onPress={() => Actions.MyDialog()}
      >
        <Text>Open Dialog</Text>
      </Button>
      <Button
        primary
        onPress={() => Actions.pop()}
      >
        <Text>Close Drawer</Text>
      </Button>
      <Button
        primary
        onPress={() => console.log(Actions.currentScene)}
      >
        <Text>Log Scene</Text>
      </Button>
    </Body>
  </Container>
);

