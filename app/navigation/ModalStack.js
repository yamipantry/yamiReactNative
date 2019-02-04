import { createSwitchNavigator } from 'react-navigation'
import BookmarksModal from '../client/modals/modalExample'
import Recipes from '../client/recipesContainer'
import SingleRecipe from '../client/SingleRecipeContainer';
import Pantry from '../client/PantryContainer';
import { Settings } from '../screens/settings';
import profileContainer from '../client/profileContainer';
import NoRecipes from '../client/modals/NoRecipes';
import BookmarksContainer from '../client/BookmarksContainer';
import yamiMaps from '../screens/yamiMaps'
import yamiDinners from '../client/yamiDinnerFormContainer'


const ModalStack = createSwitchNavigator( {
    SettingsScreen: { screen: Settings },
    ProfileScreen: { screen: profileContainer },
    BookmarksModal: { screen: BookmarksModal},
    Recipes: {screen: Recipes},
    SingleRecipe: {screen: SingleRecipe},
    Home: { screen: Pantry},
    NoRecipes: { screen: NoRecipes},
    Bookmarks: { screen: BookmarksContainer},
    YamiDinnerFormScreen: {screen: yamiDinners},
    YamiMaps: {screen: yamiMaps}
},{
    headerMode: 'none',
    initialRouteName: 'Home',
    contentComponent: Pantry
}
)

export default ModalStack