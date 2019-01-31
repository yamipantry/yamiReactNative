import { createStackNavigator } from 'react-navigation';
import LoginStack from './loginStack';
import DrawerNavigation from './drawerNavigation';

const PrimaryNav = createStackNavigator(
  {
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigation },
  },
  {
    headerMode: 'none',
  }
);

export default PrimaryNav;
