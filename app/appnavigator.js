import { createStackNavigator, createAppContainer } from 'react-navigation';
import Recipes from './client/recipesContainer';
import SingleRecipe from './client/SingleRecipeContainer';
import PrimaryNav from './navigation/primaryNav';

const AppNavigator = createStackNavigator(
  {
    PrimaryNav: { screen: PrimaryNav },
    Recipes: { screen: Recipes },
    SingleRecipe: { screen: SingleRecipe },
  },
  {
    headerMode: 'none',
  }
);


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
