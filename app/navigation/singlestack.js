import { createStackNavigator } from 'react-navigation';
import { Settings } from '../screens/settings';
import profileContainer from '../client/profileContainer';
import Pantry from '../client/PantryContainer';
import Recipes from '../client/recipesContainer';
import SingleRecipe from '../client/SingleRecipeContainer';
import friendsContainer from '../client/friendsContainer';

export const PantryStack = createStackNavigator(
  {
    Home: {
      screen: Pantry,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Home',
      headerMode: 'screen',
      headerTitle: 'Pantry',
      //drawerLabel: 'Pantry',
    }),
  }
);

export const SettingsStack = createStackNavigator(
  {
    SettingsScreen: {
      screen: Settings,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Settings',
      headerMode: 'screen',
      headerTitle: 'Settings',
      //drawerLabel: 'Settings',
    }),
  }
);

export const ProfileStack = createStackNavigator(
  {
    ProfileScreen: {
      screen: profileContainer,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Profile',
      headerMode: 'screen',
      headerTitle: 'Settings',
      //drawerLabel: 'Profile',
    }),
  }
);

export const RecipesStack = createStackNavigator(
  {
    Recipes: {
      screen: Recipes,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Recipes',
      headerMode: 'screen',
      headerTitle: 'Settings',
      //drawerLabel: 'Recipes',
    }),
  }
);

export const SingleRecipeStack = createStackNavigator(
  {
    SingleRecipe: {
      screen: SingleRecipe,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'SingleRecipe',
      headerMode: 'screen',
      headerTitle: 'Settings',
      //drawerLabel: 'SingleRecipe',
    }),
  }
);

export const FriendsStack = createStackNavigator({
  Friends: {
    screen: friendsContainer,
    navigationOptions: {
      initialRouteName: 'Friends',
      headerMode: 'screen',
      headerTitle: 'Friends',
      //drawerLabel: 'Friends',
    },
  },
});
