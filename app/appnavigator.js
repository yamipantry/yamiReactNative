import { createStackNavigator, createAppContainer } from 'react-navigation';
import PrimaryNav from './navigation/primaryNav';

const AppNavigator = createStackNavigator(
  {
    PrimaryNav: { screen: PrimaryNav },
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
