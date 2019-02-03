import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DrawerStack from './drawerStack';
import { webserver } from '../../helperfunction';

export class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={{ uri: `${webserver}/logo.jpeg` }}
        style={{ width: 50, height: 50 }}
      />
    );
  }
}

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
