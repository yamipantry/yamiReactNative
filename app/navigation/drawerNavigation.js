import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { createStackNavigator, DrawerActions } from "react-navigation";
import DrawerStack from "./drawerStack";
import ModalStack from './ModalStack'
import { webserver } from "../../helperfunction";

export class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={{uri: `${webserver}/logo.jpeg`}}
        style={{ width: 50, height: 50}}
      />
    );
  }
}

const DrawerNavigation = createStackNavigator(
  {
    DrawerStackScreen: {
      screen: DrawerStack,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: "#FFFFFF" },
        headerTitle: <LogoTitle />,
        headerTitleContainerStyle: {justifyContent: 'center'},
        headerTintColor: "white",
        headerLeft: (
          <Text
            style={{ fontWeight: "300", fontSize: 20, paddingLeft: 40 }}
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            Menu
          </Text>
        ),
        headerRight: (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home", { editMode: true });
            }}
          >
            <Text style={{ fontWeight: "300", fontSize: 20, paddingRight: 15 }}>
              Edit Pantry
            </Text>
          </TouchableOpacity>
        )
      })
    },
    ScreenStack: {
      screen: ModalStack,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: "#FFFFFF" },
        headerTitle: <LogoTitle />,
        headerTitleContainerStyle: {justifyContent: 'center'},
        headerTintColor: "white",
        headerLeft: (
          <Text
            style={{ fontWeight: "300", fontSize: 20, paddingLeft: 40 }}
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            Menu
          </Text>
        ),
        headerRight: (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home", { editMode: true });
            }}
          >
            <Text style={{ fontWeight: "300", fontSize: 20, paddingRight: 15 }}>
              Edit Pantry
            </Text>
          </TouchableOpacity>
        )
      })
    },
  },
  {
    headerMode: "screen"
  }
);

export default DrawerNavigation;
