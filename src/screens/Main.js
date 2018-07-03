import { Button, Content, Text } from 'native-base';
import React from 'react';
import { Actions } from 'react-native-router-flux';


export default () => (
  <Content>
    <Text> This is the Main Stack </Text>
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
      onPress={() => Actions.HomeDrawer()}
    >
      <Text>Open Home Screen Drawer</Text>
    </Button>
    <Button
      primary
      onPress={() => Actions.Home2Drawers()}
    >
      <Text>Open Home Screen 2 Drawers</Text>
    </Button>
    <Button
      primary
      onPress={() => Actions.push('DrawerLeftOpen')}
    >
      <Text>Open Left Drawer</Text>
    </Button>
    <Button
      primary
      onPress={() => console.log(Actions.currentScene)}
    >
      <Text>Log Scene</Text>
    </Button>
  </Content>
);

