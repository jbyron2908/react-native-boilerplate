import { Button, Content, Text, Right, Icon } from 'native-base';
import React from 'react';
import { Actions } from 'react-native-router-flux';
import CustomHeader from '../components/header/CustomHeader';


export default () => (
  <Content>
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
      onPress={() => Actions.Main()}
    >
      <Text>Open Main</Text>
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
    <Button
      primary
      onPress={() => Actions.refresh({ navBar: CustomHeader })}
    >
      <Text>Change header</Text>
    </Button>
    <Button
      primary
      onPress={() => Actions.refresh({
        right:
  <Right>
    <Button transparent onPress={() => console.log('Right Button 2')}>
      <Icon name="add-circle" style={{ color: 'red' }} />
    </Button>
  </Right>,
      })}
    >
      <Text>Change right button</Text>
    </Button>
  </Content>
);

