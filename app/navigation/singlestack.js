import React from 'react';
import { View } from 'react-native';
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
              console.log(navigation)
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
        <View style={{ padding: 6 }}>
          <RkButton
            rkType="outline small"
            style={{ width: 45 }}
            onPress={() => {
              navigation.navigate('FriendsEdit');
            }}
          >
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
  FriendsEdit: {
    screen: friendsEditSc,
    navigationOptions: ({ navigation }) => ({
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
  messageTest: {
    screen: Chat,
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
