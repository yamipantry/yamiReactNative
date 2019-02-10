import React, { Component } from 'react';
import { TouchableHighlight, View, ScrollView, TouchableOpacity } from 'react-native';
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
                <TouchableOpacity
                  style={styles.textDrawer}
                  onPress={() => {
                    this.props.navigation.navigate('Home', { editMode: false });
                    this.props.navigation.dispatch(
                      DrawerActions.toggleDrawer()
                    );
                  }}
                >
                  <RkText>Pantry</RkText>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.containerDrawerScreen}
            activeOpacity={1}
          >
            <View style={styles.contentDrawerScreen}>
              <View style={styles.contentDrawerScreen}>
                <TouchableOpacity
                  style={styles.textDrawer}
                  onPress={() => {
                    this.props.navigation.navigate('RecipeAdding', {
                      editMode: false,
                    });
                    this.props.navigation.dispatch(
                      DrawerActions.toggleDrawer()
                    );
                  }}>
                <RkText>
                  Add Recipe
                </RkText>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.containerDrawerScreen}
            activeOpacity={0.5}
          >
            <View style={styles.contentDrawerScreen}>
              <View style={styles.contentDrawerScreen}>
                <TouchableOpacity
                  style={styles.textDrawer}
                  onPress={() => {
                    this.props.navigation.navigate('SettingsScreen');
                    this.props.navigation.dispatch(
                      DrawerActions.toggleDrawer()
                    );
                  }}>
                <RkText>
                  Settings
                </RkText></TouchableOpacity>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.containerDrawerScreen}
            activeOpacity={1}
          >
            <View style={styles.contentDrawerScreen}>
              <View style={styles.contentDrawerScreen}>
                <TouchableOpacity
                  style={styles.textDrawer}
                  onPress={() => {
                    this.props.navigation.navigate('Friends');
                    this.props.navigation.dispatch(
                      DrawerActions.toggleDrawer()
                    );
                  }}
                >
                <RkText> Friends
                </RkText>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.containerDrawerScreen}
            activeOpacity={1}
          >
            <View style={styles.contentDrawerScreen}>
              <View style={styles.contentDrawerScreen}>
                <TouchableOpacity
                  style={styles.textDrawer}
                  onPress={() => {
                    this.props.navigation.navigate('Bookmarks');
                    this.props.navigation.dispatch(
                      DrawerActions.toggleDrawer()
                    );
                  }}
                >
              <RkText>
                  Bookmarks
                </RkText>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.containerDrawerScreen}
            activeOpacity={1}
          >
            <View style={styles.contentDrawerScreen}>
              <View style={styles.contentDrawerScreen}>
                  <TouchableOpacity
                  style={styles.textDrawer}
                  onPress={() => {
                    this.props.navigation.navigate('YamiMap');
                    this.props.navigation.dispatch(
                      DrawerActions.toggleDrawer()
                    );
                  }}
                >
                <RkText>  Yami Maps
                </RkText>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}

export default DrawerScreen;
