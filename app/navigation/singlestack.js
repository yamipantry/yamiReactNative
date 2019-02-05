import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  createStackNavigator,
  DrawerActions,
  createSwitchNavigator,
} from 'react-navigation';
import { Settings } from '../screens/settings';
import profileContainer from '../client/profileContainer';
import BookmarksContainer from '../client/BookmarksContainer';
import Pantry from '../client/PantryContainer';
import Recipes from '../client/recipesContainer';
import SingleRecipe from '../client/SingleRecipeContainer';
import friendsContainer from '../client/friendsContainer';
import friendsPantrySc from '../screens/friendsPantry';
import { RkText, RkButton } from 'react-native-ui-kitten';
import YamiDinnersCont from '../client/yamiDinnerFormContainer';
import YamiMaps from '../screens/yamiMaps';
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
        <View style={{ paddingLeft: 25 }}>
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
        <View style={{ paddingRight: 20 }}>
          <RkButton
            rkType="outline small"
            style={{ width: 50 }}
            onPress={() => {
              navigation.navigate('Home', { editMode: true });
            }}
          >
            Edit Pantry
          </RkButton>
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
      headerRight: <View style={{ paddingLeft: 25 }} />,
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
      headerRight: <View style={{ paddingLeft: 25 }} />,
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
      headerRight: <View style={{ paddingLeft: 25 }} />,
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
      headerTitle: 'Suggested Recipes',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1,
      },
      headerRight: <View style={{ paddingLeft: 25 }} />,
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
      headerRight: <View style={{ paddingLeft: 25 }} />,
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
      headerRight: <View style={{ paddingLeft: 25 }} />,
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
//we deleted here so maybe misssing curly brace or paraenthesis

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
  FriendsPantry: {
    screen: friendsPantrySc,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
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
      headerRight: <View style={{ paddingLeft: 25 }} />,
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
