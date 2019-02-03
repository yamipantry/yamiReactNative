import { createDrawerNavigator } from 'react-navigation';
import DrawerScreen from '../screens/drawerscreen';
import { FriendsStack, PantryStack } from './singlestack';

const DrawerStack = createDrawerNavigator(
  {
    Home: { screen: PantryStack },
    //SettingsScreen: { name: SettingsStack, screen: SettingsStack },
    //ProfileScreen: { name: ProfileStack, screen: ProfileStack },
    //Recipes: { name: RecipesStack, screen: RecipesStack },
    //SingleRecipe: { name: SingleRecipeStack, screen: SingleRecipeStack },
    Friends: { screen: FriendsStack },
  },
  {
    //initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 300,
    headerMode: 'screen',
  }
);

export default DrawerStack;
