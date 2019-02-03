import { createSwitchNavigator } from 'react-navigation'
import BookmarksModal from '../client/modals/modalExample'
import Recipes from '../client/recipesContainer'
import SingleRecipe from '../client/SingleRecipeContainer';
import Pantry from '../client/PantryContainer';
import { Settings } from '../screens/settings';
import profileContainer from '../client/profileContainer';


const ModalStack = createSwitchNavigator( {
    SettingsScreen: { screen: Settings },
    ProfileScreen: { screen: profileContainer },
    BookmarksModal: { screen: BookmarksModal},
    Recipes: {screen: Recipes},
    SingleRecipe: {screen: SingleRecipe},
    Home: { screen: Pantry}
},{
    headerMode: 'none',
    initialRouteName: 'Home',
    contentComponent: Pantry
}
)

export default ModalStack