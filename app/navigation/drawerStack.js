import { createDrawerNavigator } from 'react-navigation';
import DrawerScreen from '../screens/drawerscreen';
import FriendsPantry from '../screens/friendsPantry';
import {
  FriendsStack,
  PantryStack,
  ProfileStack,
  RecipesStack,
  SingleRecipeStack,
  SettingsStack,
} from './singlestack';

const DrawerStack = createDrawerNavigator(
  {
    Home: { screen: PantryStack },
    SettingsScreen: { screen: SettingsStack },
    ProfileScreen: { screen: ProfileStack },
    Recipes: { screen: RecipesStack },
    SingleRecipe: { screen: SingleRecipeStack },
    Friends: { screen: FriendsStack },
    FriendsPantry: {
      screen: FriendsPantry,
    },
  },
  {
    contentComponent: DrawerScreen,
    drawerWidth: 300,
    headerMode: 'none',
  }
);

export default DrawerStack;
