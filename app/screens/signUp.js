import React from 'react';
import styles from '../assets/styles';
import { View, Image, Keyboard, TouchableOpacity, Text } from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
} from 'react-native-ui-kitten';
import LinearGradient from 'react-native-linear-gradient';
import { scaleVertical } from '../utils/scale';

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      password2: '',
    };
  }
  static navigationOptions = {
    header: null,
  };

  renderImage = () => (
    <Image
      style={styles.image}
      source={require('../assets/images/logo.jpeg')}
    />
  );

  onSignUpButtonPressed = () => {
    this.props.handleSubmit(this.state);
    this.props.navigation.navigate('Recipes');
  };

  onSignInButtonPressed = () => {
    this.props.navigation.navigate('Login');
  };

  render = () => {
    return (
      <RkAvoidKeyboard
        style={[styles.screen, styles.screenSignUp]}
        onStartShouldSetResponder={() => true}
        onResponderRelease={() => Keyboard.dismiss()}
      >
        <View style={{ alignItems: 'center' }}>{this.renderImage()}</View>
        <View style={styles.content}>
          <View>
            <RkTextInput
              rkType="rounded"
              placeholder="Username"
              name="userName"
              onChangeText={text => {
                this.setState({
                  userName: text,
                });
              }}
              value={this.state.userName}
            />
            <RkTextInput
              rkType="rounded"
              placeholder="Email"
              name="email"
              onChangeText={text => {
                this.setState({
                  email: text,
                });
              }}
              value={this.state.email}
            />
            <RkTextInput
              rkType="rounded"
              placeholder="Password"
              name="password"
              onChangeText={text => {
                this.setState({
                  password: text,
                });
              }}
              value={this.state.password}
              secureTextEntry
            />
            <RkTextInput
              rkType="rounded"
              placeholder="Confirm Password"
              name="password2"
              onChangeText={text => {
                this.setState({
                  password2: text,
                });
              }}
              value={this.state.password2}
              secureTextEntry
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
                onPress={this.onSignUpButtonPressed}
              >
                <View style={styles.textRow}>
                  <Text style={styles.buttonText}>SIGN UP</Text>
                </View>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType="primary3">Already have an account? </RkText>
              <RkButton rkType="clear">
                <RkText
                  rkType="header6"
                  onPress={this.onSignInButtonPressed}
                  style={{ fontWeight: 'bold' }}
                >
                  Sign in now
                </RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </RkAvoidKeyboard>
    );
  };
}
