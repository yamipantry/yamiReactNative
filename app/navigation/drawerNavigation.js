import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import DrawerStack from './drawerStack';

const DrawerNavigation = createStackNavigator(
  {
    DrawerStackScreen: {
      screen: DrawerStack,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: '#FFFFFF' },
        title: 'Welcome',
        headerTintColor: 'white',
        headerLeft: (
          <Text
            style={{ fontWeight: 'bolder', fontSize: 15, paddingLeft: 10 }}
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            Menu
          </Text>
        ),
      }),
    },
  },
  {
    headerMode: 'screen',
  }
);

export default DrawerNavigation;
