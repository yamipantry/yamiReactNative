import { createDrawerNavigator } from 'react-navigation';
import { Settings } from '../screens/settings';
import profileContainer from '../client/profileContainer';
import DrawerScreen from '../screens/drawerscreen';
import Pantry from '../client/PantryContainer';
import Recipes from '../client/recipesContainer'
import SingleRecipe from '../client/SingleRecipeContainer'

const DrawerStack = createDrawerNavigator(
  {
    Home: { screen: Pantry },
    SettingsScreen: { screen: Settings },
    ProfileScreen: { screen: profileContainer },
    Recipes: {screen: Recipes},
    SingleRecipe: {screen: SingleRecipe}
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 200,
  }
);

export default DrawerStack;
