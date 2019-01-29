import { createStackNavigator, createAppContainer } from 'react-navigation';
import { SignUp } from './screens/signUp';
import Login from './client/loginContainer';
import Recipes from './client/recipesContainer';
import { Settings } from './screens/settings';
import { Profile } from './screens/profile';
// import { Recipe } from './screens/recipe';

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  Recipes: { screen: Recipes },
  Settings: { screen: Settings },
  Profile: { screen: Profile },
  // Recipe: { screen: Recipe },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
