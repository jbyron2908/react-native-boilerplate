import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';


export default createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  SignUp: {
    screen: SignUpScreen,
  },
});
