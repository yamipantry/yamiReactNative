import { createDrawerNavigator } from 'react-navigation';
import DrawerScreen from '../screens/drawerscreen';
import Pantry from '../client/PantryContainer';
import ModalStack from './ModalStack';


const DrawerStack = createDrawerNavigator(
  {
    Home: { screen: Pantry },
    ScreenStack: {screen: ModalStack}
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 200,
  }
);

export default DrawerStack;
