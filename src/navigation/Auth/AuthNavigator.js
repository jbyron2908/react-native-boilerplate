import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../../screens/Login/LoginScreen';
import SignUpScreen from '../../screens/SignUp/SignUpScreen';


export default createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  SignUp: {
    screen: SignUpScreen,
  },
});
