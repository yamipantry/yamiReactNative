import { createSwitchNavigator } from 'react-navigation';
import BookmarksModal from '../client/modals/modalExample';
import NoRecipes from '../client/modals/NoRecipes';
import {
  FriendsStack,
  PantryStack,
  ProfileStack,
  SettingsStack,
  RecipeAdd,
  YamiMapStack,
  RecipesStack,
  BookmarkStack
} from "./singlestack";


const ModalStack = createSwitchNavigator(
  {
    SettingsScreen: { screen: SettingsStack },
    ProfileScreen: { screen: ProfileStack },
    BookmarksModal: { screen: BookmarksModal },
    Bookmarks: { screen: BookmarkStack },
    Recipes: {screen: RecipesStack},
    Friends: { screen: FriendsStack },
    Home: { screen: PantryStack },
    NoRecipes: { screen: NoRecipes },
    RecipeAdding: { screen: RecipeAdd },
    YamiMaps: { screen: YamiMapStack }
  },
  {
    headerMode: 'none',
  }
);

export default ModalStack;
