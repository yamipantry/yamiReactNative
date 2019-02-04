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
    contentComponent: DrawerScreen,
    drawerWidth: 300,
    headerMode: 'none',
  }
);

export default DrawerStack;
