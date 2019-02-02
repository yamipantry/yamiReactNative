import { createStackNavigator, createAppContainer } from 'react-navigation';
import PrimaryNav from './navigation/primaryNav';
import MapComponent from './screens/maps';

const AppNavigator = createStackNavigator(
  {
    PrimaryNav: { screen: PrimaryNav },
    Maps: { screen: MapComponent },
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
