import React from 'react';
import styles from '../assets/styles';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { RkText } from 'react-native-ui-kitten';

export class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings'.toUpperCase(),
  };

  state = {};

  onEditPressed = () => {
    this.props.navigation.navigate('ProfileScreen');
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <RkText rkType="primary header6">PROFILE SETTINGS</RkText>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType="header6" onPress={this.onEditPressed}>
                Edit Profile
              </RkText>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={[styles.row, styles.settingheader]}>
            <RkText rkType="primary header6">SUPPORT</RkText>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType="header6">Help</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType="header6">Privacy Policy</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType="header6">Terms & Conditions</RkText>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <RkText rkType="header6">Logout</RkText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
