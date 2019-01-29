import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignUp from './client/signupContainer';
import Login from './client/loginContainer';
import Recipes from './client/recipesContainer';
// import { Recipe } from './screens/recipe';

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  Recipes: { screen: Recipes },
  // Recipe: { screen: Recipe },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
