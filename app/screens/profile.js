import React from 'react';
import styles from '../assets/styles';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Keyboard,
  Text,
} from 'react-native';
import { RkAvoidKeyboard, RkTextInput } from 'react-native-ui-kitten';
import LinearGradient from 'react-native-linear-gradient';
import { scaleVertical } from '../utils/scale';

export class Profile extends React.Component {
  state = {
    id: this.props.user.id,
    userName: this.props.user.userName,
    email: this.props.user.email,
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    streetName: this.props.user.streetName,
    city: this.props.user.city,
    state: this.props.user.state,
    zip: this.props.user.zip,
    profileImage: this.props.user.profileImage,
  };

  onEditButtonPressed = () => {
    this.props.handleSubmit(this.state);
  };

  render() {
    //user doesnt pull in pantryItems
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <RkAvoidKeyboard
            style={styles.screen}
            onStartShouldSetResponder={() => true}
            onResponderRelease={() => Keyboard.dismiss()}
          >
            <View style={styles.content}>
              <View style={styles.container}>
                <RkTextInput
                  onChangeText={text => {
                    this.setState({
                      userName: text,
                    });
                  }}
                  rkType="rounded"
                  value={this.state.userName}
                  placeholder="Username"
                />
                <RkTextInput
                  rkType="rounded"
                  onChangeText={text => {
                    this.setState({
                      email: text,
                    });
                  }}
                  value={this.state.email}
                  placeholder="Email"
                />
                <RkTextInput
                  rkType="rounded"
                  onChangeText={text => {
                    this.setState({
                      firstName: text,
                    });
                  }}
                  value={this.state.firstName}
                  placeholder="First Name"
                />
                <RkTextInput
                  rkType="rounded"
                  onChangeText={text => {
                    this.setState({
                      lastName: text,
                    });
                  }}
                  value={this.state.lastName}
                  placeholder="Last Name"
                />
                <RkTextInput
                  rkType="rounded"
                  onChangeText={text => {
                    this.setState({
                      streetName: text,
                    });
                  }}
                  value={this.state.streetName}
                  placeholder="Street Address"
                />
                <RkTextInput
                  rkType="rounded"
                  onChangeText={text => {
                    this.setState({
                      city: text,
                    });
                  }}
                  value={this.state.city}
                  placeholder="City"
                />
                <RkTextInput
                  rkType="rounded"
                  onChangeText={text => {
                    this.setState({
                      state: text,
                    });
                  }}
                  value={this.state.state}
                  placeholder="State"
                />
                <RkTextInput
                  rkType="rounded"
                  onChangeText={text => {
                    this.setState({
                      zip: text,
                    });
                  }}
                  value={this.state.zip}
                  placeholder="Zip"
                />
                <LinearGradient
                  colors={['#8a2387', '#e94057', '#f27121']}
                  start={{ x: 0.0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={{
                    alignSelf: 'stretch',
                    height: scaleVertical(45),
                    marginVertical: 20,
                    borderRadius: 28,
                  }}
                >
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.onEditButtonPressed}
                  >
                    <View style={styles.textRow}>
                      <Text style={styles.buttonText}>EDIT</Text>
                    </View>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </RkAvoidKeyboard>
        </View>
      </ScrollView>
    );
  }
}
