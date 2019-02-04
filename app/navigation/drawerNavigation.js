import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import DrawerStack from './drawerStack';
import ModalStack from './ModalStack';
import { webserver } from '../../helperfunction';

const DrawerNavigation = createStackNavigator(
  {
    DrawerStackScreen: {
      screen: DrawerStack,
    },
  },
  {
    headerMode: 'none',
  }
);
export default DrawerNavigation;
