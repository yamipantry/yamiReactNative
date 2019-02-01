import { createStackNavigator, createAppContainer } from 'react-navigation';
import Recipes from './client/recipesContainer';
import SingleRecipe from './client/SingleRecipeContainer';
import PrimaryNav from './navigation/primaryNav';
import MapComponent from './screens/maps';

const AppNavigator = createStackNavigator(
  {
    PrimaryNav: { screen: PrimaryNav },
    Recipes: { screen: Recipes },
    SingleRecipe: { screen: SingleRecipe },
    Maps: { screen: MapComponent },
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
