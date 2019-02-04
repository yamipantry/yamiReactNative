import { createStackNavigator } from 'react-navigation';
import DrawerStack from './drawerStack';

const DrawerNavigation = createStackNavigator(
  {
    DrawerStackScreen: {
      screen: DrawerStack,
    },
  },
  {
    headerMode: 'none',
  }
);
export default DrawerNavigation;
