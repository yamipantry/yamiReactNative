import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import { Settings } from '../screens/settings';
import profileContainer from '../client/profileContainer';
import Pantry from '../client/PantryContainer';
import Recipes from '../client/recipesContainer';
import SingleRecipe from '../client/SingleRecipeContainer';
import friendsContainer from '../client/friendsContainer';
import { RkText, RkButton } from 'react-native-ui-kitten';
import styles from '../assets/styles';

export const PantryStack = createStackNavigator({
  Home: {
    screen: Pantry,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'Pantry',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
        alignSelf: 'center',
      },
      headerLeft: (
        <View>
          <RkText
            style={styles.menuText}
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            Menu
          </RkText>
        </View>
      ),
      headerRight: (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home', { editMode: true });
            }}
          >
            <RkText style={styles.menuText}>Edit Pantry</RkText>
          </TouchableOpacity>
        </View>
      ),
    }),
  },
});

export const SettingsStack = createStackNavigator({
  SettingsScreen: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'Settings',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1,
      },
      headerRight: <View style={{ padding: 6 }} />,
      headerLeft: (
        <RkText
          style={styles.menuText}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          Menu
        </RkText>
      ),
    }),
  },
});

export const ProfileStack = createStackNavigator({
  ProfileScreen: {
    screen: profileContainer,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'Profile',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1,
      },
      headerRight: <View style={{ padding: 6 }} />,
      headerLeft: (
        <RkText
          style={styles.menuText}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          Menu
        </RkText>
      ),
    }),
  },
});

export const RecipesStack = createStackNavigator({
  Recipes: {
    screen: Recipes,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'Sugguested Recipes',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1,
      },
      headerRight: <View style={{ padding: 6 }} />,
      headerLeft: (
        <RkText
          style={styles.menuText}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          Menu
        </RkText>
      ),
    }),
  },
});

export const SingleRecipeStack = createStackNavigator({
  SingleRecipe: {
    screen: SingleRecipe,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'Recipe',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1,
      },
      headerRight: <View style={{ padding: 6 }} />,
      headerLeft: (
        <RkText
          style={styles.menuText}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          Menu
        </RkText>
      ),
    }),
  },
});

export const FriendsStack = createStackNavigator({
  Friends: {
    screen: friendsContainer,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'Friends',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1,
      },
      headerRight: (
        <View style={{ padding: 6 }}>
          <RkButton rkType="outline small" style={{ width: 45 }}>
            Edit
          </RkButton>
        </View>
      ),

      headerLeft: (
        <View>
          <RkText
            style={styles.menuText}
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            Menu
          </RkText>
        </View>
      ),
    }),
  },
});
