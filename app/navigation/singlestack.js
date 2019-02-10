import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import { Settings } from '../screens/settings';
import profileContainer from '../client/profileContainer';
import BookmarksContainer from '../client/BookmarksContainer';
import Pantry from '../client/PantryContainer';
import Recipes from '../client/recipesContainer';
import SingleRecipe from '../client/SingleRecipeContainer';
import friendsContainer from '../client/friendsContainer';
import friendsPantrySc from '../screens/friendsPantry';
import friendsEditSc from '../client/friendsEditContainer';
import { RkText, RkButton } from 'react-native-ui-kitten';
import YamiDinnersCont from '../client/yamiDinnerFormContainer';
import YamiMaps from '../screens/yamiMaps';
import styles from '../assets/styles';
import AddRecipeContainer from '../client/AddRecipeContainer';
import Chat from '../client/messageContainer';

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
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              source={require('../assets/images/burger_menu.png')}
            />
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
      headerRight: <View style={{ paddingRight: 20 }} />,
      headerLeft: (
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              source={require('../assets/images/burger_menu.png')}
            />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
});

export const RecipeAdd = createStackNavigator({
  RecipeAdd: {
    screen: AddRecipeContainer,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'Add A Recipe',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1,
      },
      headerRight: <View style={{ paddingRight: 20 }} />,
      headerLeft: (
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              source={require('../assets/images/burger_menu.png')}
            />
          </TouchableOpacity>
        </View>
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
      headerRight: <View style={{ paddingRight: 20 }} />,
      headerLeft: (
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              source={require('../assets/images/burger_menu.png')}
            />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
});

export const BookmarkStack = createStackNavigator({
  BookmarksContainer: {
    screen: BookmarksContainer,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'Bookmarked Recipes',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1,
      },
      headerRight: <View style={{ paddingRight: 20 }} />,
      headerLeft: (
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              source={require('../assets/images/burger_menu.png')}
            />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
});

export const RecipesStack = createStackNavigator({
  Recipes: {
    screen: Recipes,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'Suggested Recipes',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1,
      },
      headerRight: <View style={{ paddingRight: 20 }} />,
      headerLeft: (
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              source={require('../assets/images/burger_menu.png')}
            />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
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
      headerRight: <View style={{ paddingRight: 20 }} />,
      headerLeft: (
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              source={require('../assets/images/burger_menu.png')}
            />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
  YamiDinners: {
    screen: YamiDinnersCont,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'YAMI Dinners',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1,
      },
      headerRight: <View style={{ paddingRight: 20 }} />,
      headerLeft: (
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              source={require('../assets/images/burger_menu.png')}
            />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
});

export const FriendsStack = createStackNavigator({
  Friends: {
    screen: friendsContainer,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Friends',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1,
      },
      headerRight: (
        <View style={{ paddingRight: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FriendsEdit');
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              source={require('../assets/images/edit.png')}
            />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: (
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              source={require('../assets/images/burger_menu.png')}
            />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
  FriendsPantry: {
    screen: friendsPantrySc,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              source={require('../assets/images/burger_menu.png')}
            />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
  FriendsEdit: {
    screen: friendsEditSc,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              source={require('../assets/images/burger_menu.png')}
            />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
});

// export const YamiDinnersStack = createStackNavigator({
//   YamiDinners: {
//     screen: YamiDinnersCont,
//     navigationOptions: ({ navigation }) => ({
//       headerMode: "screen",
//       headerTitle: "YAMI Dinners",
//       headerTitleStyle: {
//         alignSelf: "center",
//         textAlign: "center",
//         flexGrow: 1
//       },
//       headerRight: <View style={{paddingLeft: 25}} />,
//       headerLeft: (
//         <View>
//           <RkText
//             style={styles.menuText}
//             onPress={() => {
//               navigation.dispatch(DrawerActions.toggleDrawer());
//             }}
//           >
//             Menu
//           </RkText>
//         </View>
//       )
//     })
//   }
// });

export const YamiMapStack = createStackNavigator({
  YamiMap: {
    screen: YamiMaps,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'YAMI Maps',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1,
      },
      headerRight: <View style={{ paddingRight: 25 }} />,
      headerLeft: (
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              source={require('../assets/images/burger_menu.png')}
            />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
  messageTest: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      headerTitle: 'Messages',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1,
      },
      headerRight: <View style={{ paddingRight: 20 }} />,
      headerLeft: (
        <View style={{ paddingLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              source={require('../assets/images/burger_menu.png')}
            />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
});
