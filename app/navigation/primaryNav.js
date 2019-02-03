import { createStackNavigator } from 'react-navigation';
import LoginStack from './loginStack';
import DrawerNavigation from './drawerNavigation';
// import ModalStack from './ModalStack'

const PrimaryNav = createStackNavigator(
  {
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigation },
    // ScreenStack: {screen: ModalStack},
  },
  {
    headerMode: 'none',
  }
);

export default PrimaryNav;
