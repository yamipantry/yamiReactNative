import { createSwitchNavigator } from 'react-navigation';
import BookmarksModal from '../client/modals/modalExample';
import NoRecipes from '../client/modals/NoRecipes';
import BookmarksContainer from '../client/BookmarksContainer';
import yamiMaps from '../screens/yamiMaps';
import YamiDinners from '../client/yamiDinnerFormContainer';
import FriendsPantry from '../screens/friendsPantry';
import {
  FriendsStack,
  PantryStack,
  ProfileStack,
  RecipesStack,
  SingleRecipeStack,
  SettingsStack,
} from './singlestack';

const ModalStack = createSwitchNavigator(
  {
    SettingsScreen: { screen: SettingsStack },
    ProfileScreen: { screen: ProfileStack },
    BookmarksModal: { screen: BookmarksModal },
    Recipes: { screen: RecipesStack },
    Friends: { screen: FriendsStack },
    FreindsPantry: { screen: FriendsPantry },
    SingleRecipe: { screen: SingleRecipeStack },
    Home: { screen: PantryStack },
    NoRecipes: { screen: NoRecipes },
    Bookmarks: { screen: BookmarksContainer },
    YamiDinnerFormScreen: { screen: YamiDinners },
    YamiMaps: { screen: yamiMaps },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  }
);

export default ModalStack;
