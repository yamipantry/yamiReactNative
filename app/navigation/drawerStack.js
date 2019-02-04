import { createDrawerNavigator } from 'react-navigation';
import DrawerScreen from '../screens/drawerscreen';
import ModalStack from './ModalStack';

const DrawerStack = createDrawerNavigator(
  {
    ScreenStack: { screen: ModalStack },
  },
  {
    contentComponent: DrawerScreen,
    drawerWidth: 300,
    headerMode: 'none',
  }
);

export default DrawerStack;
