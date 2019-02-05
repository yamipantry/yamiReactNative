import { createSwitchNavigator } from "react-navigation";
import BookmarksModal from "../client/modals/modalExample";
import NoRecipes from "../client/modals/NoRecipes";
import FriendsPantry from "../screens/friendsPantry";
import {
  FriendsStack,
  PantryStack,
  ProfileStack,
  SettingsStack,
  // YamiDinnersStack,
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
    FriendsPantry: { screen: FriendsPantry },
    Home: { screen: PantryStack },
    NoRecipes: { screen: NoRecipes },
    // YamiDinnerFormScreen: { screen: YamiDinnersStack },
    YamiMaps: { screen: YamiMapStack }
  },
  {
    headerMode: "none"
  }
);

export default ModalStack;
