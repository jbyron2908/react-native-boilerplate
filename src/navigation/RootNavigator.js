import { createSwitchNavigator } from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import EntryScreen from '../screens/Entry';


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
