import React, { Component } from 'react';
import { TouchableHighlight, View, ScrollView } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import { DrawerActions } from 'react-navigation';
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
                    this.props.navigation.navigate('Home', { editMode: false });
                    this.props.navigation.dispatch(
                      DrawerActions.toggleDrawer()
                    );
                  }}
                >
                  Pantry
                </RkText>
              </View>
            </View>
          </TouchableHighlight>
          {/* <TouchableHighlight
            style={styles.containerDrawerScreen}
            activeOpacity={1}
          >
            <View style={styles.contentDrawerScreen}>
              <View style={styles.contentDrawerScreen}>
                <RkText
                  style={styles.textDrawer}
                  onPress={() => {
                    this.props.navigation.navigate('RecipeAdding', {
                      editMode: false,
                    });
                    this.props.navigation.dispatch(
                      DrawerActions.toggleDrawer()
                    );
                  }}
                >
                  Add Recipe
                </RkText>
              </View>
            </View>
          </TouchableHighlight> */}
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
                    this.props.navigation.dispatch(
                      DrawerActions.toggleDrawer()
                    );
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
                    this.props.navigation.navigate('Friends');
                    this.props.navigation.dispatch(
                      DrawerActions.toggleDrawer()
                    );
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
                    this.props.navigation.dispatch(
                      DrawerActions.toggleDrawer()
                    );
                  }}
                >
                  Bookmarks
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
                    this.props.navigation.navigate('YamiMap');
                    this.props.navigation.dispatch(
                      DrawerActions.toggleDrawer()
                    );
                  }}
                >
                  Yami Maps
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
