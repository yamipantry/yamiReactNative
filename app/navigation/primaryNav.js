import { createStackNavigator } from 'react-navigation';
import LoginStack from './loginStack';
import DrawerNavigation from './drawerNavigation';
// import Chat from '../client/messageContainer';

const PrimaryNav = createStackNavigator(
  {
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigation },
    // messageTest: { screen: Chat },
  },
  {
    headerMode: 'none',
  }
);

export default PrimaryNav;
