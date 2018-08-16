import { createSwitchNavigator } from 'react-navigation';
import EntryScreen from '../screens/Entry/EntryScreen';
import AuthNavigator from './Auth/AuthNavigator';
import MainNavigator from './Main/MainNavigator';


export default createSwitchNavigator({
  Entry: {
    screen: EntryScreen,
  },
  Auth: {
    screen: AuthNavigator,
  },
  Main: {
    screen: MainNavigator,
  },
});
