import { createStackNavigator, createAppContainer } from 'react-navigation';
import { SignUp } from './screens/signUp';
import Login from './client/loginContainer';
import Recipes from './client/recipesContainer';
import SingleRecipe from './client/SingleRecipeContainer';

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  Recipes: { screen: Recipes },
  SingleRecipe: { screen: SingleRecipe },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
