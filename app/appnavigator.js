import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignUp from './client/signupContainer';
import Login from './client/loginContainer';
import Recipes from './client/recipesContainer';

import { Settings } from './screens/settings';
import Profile from './client/profileContainer';

import SingleRecipe from './client/SingleRecipeContainer';


const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  Recipes: { screen: Recipes },

  Settings: { screen: Settings },
  Profile: { screen: Profile },

  SingleRecipe: { screen: SingleRecipe },

});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
