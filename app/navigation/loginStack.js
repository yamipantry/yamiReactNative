import { createStackNavigator } from 'react-navigation';
import Login from '../client/loginContainer';
import SignUp from '../client/signupContainer';

const LoginStack = createStackNavigator(
  {
    loginScreen: { screen: Login },
    signUpScreen: { screen: SignUp },
  },
  {
    headerMode: 'none',
  }
);

export default LoginStack;
