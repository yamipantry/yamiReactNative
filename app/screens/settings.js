import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  Text,
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme,
  RkAvoidKeyboard,
  RkTextInput,
  RkButton,
} from 'react-native-ui-kitten';
import LinearGradient from 'react-native-linear-gradient';
import { scaleVertical } from '../utils/scale';

export class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings'.toUpperCase(),
  };

  state = {};

  onEditPressed = () => {
    this.props.navigation.navigate('Profile');
  };

  // onPushNotificationsSettingChanged = value => {
  //   this.setState({ sendPush: value });
  // };

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
          <View style={[styles.row, styles.heading]}>
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

const styles = RkStyleSheet.create(theme => ({
  header: {
    paddingVertical: 25,
  },
  section: {
    marginVertical: 25,
  },
  heading: {
    paddingBottom: 12.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: 'center',
  },
  rowButton: {
    flex: 1,
    paddingVertical: 24,
  },
  switch: {
    marginVertical: 14,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colors.screen.base,
    paddingTop: 18,
    marginLeft: 1,
    marginRight: 1,
    fontWeight: 'bold',
    fontSize: 19,
  },
  container: {
    paddingHorizontal: 17,
    paddingBottom: scaleVertical(22),
    flex: -1,
  },
}));
