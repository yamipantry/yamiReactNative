import { createDrawerNavigator } from 'react-navigation';
import { Settings } from '../screens/settings';
import profileContainer from '../client/profileContainer';
import DrawerScreen from '../screens/drawerscreen';
import Pantry from '../client/PantryContainer';

const DrawerStack = createDrawerNavigator(
  {
    Home: { screen: Pantry },
    SettingsScreen: { screen: Settings },
    ProfileScreen: { screen: profileContainer },
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 300,
  }
);

export default DrawerStack;
