import React, { Component } from 'react';
import { TouchableHighlight, View, ScrollView } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import styles from '../assets/styles';

class DrawerScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableHighlight
            style={styles.containerDrawerScreen}
            activeOpacity={1}
          >
            <View style={styles.contentDrawerScreen}>
              <View style={styles.contentDrawerScreen}>
                <RkText
                  style={styles.textDrawer}
                  onPress={() => {
                    this.props.navigation.navigate('Home', {editMode: false});
                  }}
                >
                  Pantry
                </RkText>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.containerDrawerScreen}
            activeOpacity={1}
          >
            <View style={styles.contentDrawerScreen}>
              <View style={styles.contentDrawerScreen}>
                <RkText
                  style={styles.textDrawer}
                  onPress={() => {
                    this.props.navigation.navigate('SettingsScreen');
                  }}
                >
                  Settings
                </RkText>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.containerDrawerScreen}
            activeOpacity={1}
          >
            <View style={styles.contentDrawerScreen}>
              <View style={styles.contentDrawerScreen}>
                <RkText
                  style={styles.textDrawer}
                  onPress={() => {
                    this.props.navigation.navigate('FriendsScreen');
                  }}
                >
                  Friends
                </RkText>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.containerDrawerScreen}
            activeOpacity={1}
          >
            <View style={styles.contentDrawerScreen}>
              <View style={styles.contentDrawerScreen}>
                <RkText
                  style={styles.textDrawer}
                  onPress={() => {
                    this.props.navigation.navigate('Bookmarks');
                  }}
                >
                  Bookmarks
                </RkText>
              </View>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}

export default DrawerScreen;
