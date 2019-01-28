import { createStackNavigator, createAppContainer } from 'react-navigation';
import { SignUp } from './screens/signUp';
import { Login } from './screens/login';
// import { Recipes } from './screens/recipes';
// import { Recipe } from './screens/recipe';

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  // Recipes: { screen: Recipes },
  // Recipe: { screen: Recipe },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
