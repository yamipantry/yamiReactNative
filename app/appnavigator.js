import { createStackNavigator, createAppContainer } from 'react-navigation';
import PrimaryNav from './navigation/primaryNav';

const AppNavigator = createStackNavigator(
  {
    PrimaryNav: { screen: PrimaryNav },
<<<<<<< HEAD
    Recipes: { screen: Recipes },
    SingleRecipe: { screen: SingleRecipe },
=======
    Maps: { screen: MapComponent },
>>>>>>> origin
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
