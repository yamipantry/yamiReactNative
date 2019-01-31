import { createDrawerNavigator } from 'react-navigation';
import { Settings } from '../screens/settings';
import profileContainer from '../client/profileContainer';
import DrawerScreen from '../screens/drawerscreen';

const DrawerStack = createDrawerNavigator(
  {
    SettingsScreen: { screen: Settings },
    ProfileScreen: { screen: profileContainer },
  },
  {
    initialRouteName: 'SettingsScreen',
    contentComponent: DrawerScreen,
    drawerWidth: 300,
  }
);

export default DrawerStack;
