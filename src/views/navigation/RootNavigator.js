import { createStackNavigator } from 'react-navigation';
import CounterScreen from '../screens/Counter/CounterScreen';
import EntryScreen from '../screens/Entry/EntryScreen';
import FormScreen from '../screens/Form/FormScreen';
import I18nScreen from '../screens/I18n/I18nScreen';


export default createStackNavigator({
  Entry: {
    screen: EntryScreen,
  },
  I18n: {
    screen: I18nScreen,
  },
  Counter: {
    screen: CounterScreen,
  },
  Form: {
    screen: FormScreen,
  },
});
