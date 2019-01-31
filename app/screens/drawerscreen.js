import React from 'react';
import {
  TouchableHighlight,
  View,
  ScrollView,
  Image,
  Platform,
  StyleSheet,
} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { RkStyleSheet, RkText, RkTheme } from 'react-native-ui-kitten';
// import { MainRoutes } from '../../config/navigation/routes';
// import { FontAwesome } from '../../assets/icons';
// import NavigationType from '../../config/navigation/propTypes';

export class SideMenu extends React.Component {
  // static propTypes = {
  //   navigation: NavigationType.isRequired,
  // };

  onSettingsPressed = () => {
    this.props.navigation.navigate('Settings');
  };

  //yami logo
  renderIcon = () => (
    <Image style={styles.icon} source={require('../assets/images/logo.jpeg')} />
  );

  //sidebar
  //renderMenu = () => MainRoutes.map(this.renderMenuItem);

  renderMenuItem = () => (
    <TouchableHighlight
      style={styles.container}
      activeOpacity={1}
      onPress={this.onSettingsPressed}
    >
      <View style={styles.content}>
        <View style={styles.content}>
          <RkText style={styles.icon} rkType="moon primary xlarge">
            <FontAwesome>{Icons.users}</FontAwesome>
          </RkText>
          <RkText>Friends</RkText>
        </View>
        <RkText rkType="awesome secondaryColor small">
          <FontAwesome>{Icons.chevronRight}</FontAwesome>
        </RkText>
      </View>
    </TouchableHighlight>
  );

  render = () => (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, styles.content]}>
          {this.renderIcon()}
          <RkText rkType="logo">YAMI</RkText>
        </View>
        {this.renderMenu()}
      </ScrollView>
    </View>
  );
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    height: 80,
    paddingHorizontal: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
  },
  root: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: theme.colors.screen.base,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 13,
  },
}));

// import React, { Component } from 'react';
// import { ScrollView, Text, View } from 'react-native';

// class DrawerScreen extends Component {
//   render() {
//     return (
//       <View>
//         <ScrollView>
//           <View>
//             <View>
//               <Text
//                 onPress={() => {
//                   this.props.navigation.navigate('Home');
//                 }}
//               >
//                 Pantry
//               </Text>
//             </View>
//             <View>
//               <Text
//                 onPress={() => {
//                   this.props.navigation.navigate('SettingsScreen');
//                 }}
//               >
//                 Settings
//               </Text>
//             </View>
//             <View>
//               <Text
//                 onPress={() => {
//                   this.props.navigation.navigate('ProfileScreen');
//                 }}
//               >
//                 Profile
//               </Text>
//             </View>
//           </View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// export default DrawerScreen;
