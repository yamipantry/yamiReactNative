import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

class DrawerScreen extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <View>
              <Text
                onPress={() => {
                  this.props.navigation.navigate('SettingsScreen');
                }}
              >
                Settings
              </Text>
            </View>
            <View>
              <Text
                onPress={() => {
                  this.props.navigation.navigate('ProfileScreen');
                }}
              >
                About
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DrawerScreen;
