import { createSwitchNavigator } from "react-navigation";
import BookmarksModal from "../client/modals/modalExample";
import NoRecipes from "../client/modals/NoRecipes";
import BookmarksContainer from "../client/BookmarksContainer";
import FriendsPantry from "../screens/friendsPantry";
import {
  FriendsStack,
  PantryStack,
  ProfileStack,
  // SingleRecipeStack,
  SettingsStack,
  YamiDinnersStack,
  YamiMapStack,
  RecipesStack
} from "./singlestack";

const ModalStack = createSwitchNavigator(
  {
    SettingsScreen: { screen: SettingsStack },
    ProfileScreen: { screen: ProfileStack },
    BookmarksModal: { screen: BookmarksModal },
    Recipes: {screen: RecipesStack},
    Friends: { screen: FriendsStack },
    FriendsPantry: { screen: FriendsPantry },
    // SingleRecipe: { screen: SingleRecipeStack},
    Home: { screen: PantryStack },
    NoRecipes: { screen: NoRecipes },
    Bookmarks: { screen: BookmarksContainer },
    YamiDinnerFormScreen: { screen: YamiDinnersStack },
    YamiMaps: { screen: YamiMapStack }
  },
  {
    headerMode: "none"
  }
);

export default ModalStack;
