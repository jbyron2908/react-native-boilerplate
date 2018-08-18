import { createStackNavigator } from 'react-navigation';
import EntryScreen from '../screens/Entry/EntryScreen';
import I18nScreen from '../screens/I18n/I18nScreen';


export default createStackNavigator({
  Entry: {
    screen: EntryScreen,
  },
  I18n: {
    screen: I18nScreen,
  },
});
