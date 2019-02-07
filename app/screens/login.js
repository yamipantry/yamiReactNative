import React from 'react';
import styles from '../assets/styles';
import {
  View,
  Image,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import { RkButton, RkText, RkTextInput } from 'react-native-ui-kitten';
import LinearGradient from 'react-native-linear-gradient';
import { scaleModerate, scaleVertical } from '../utils/scale';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  static navigationOptions = {
    header: null,
  };

  renderImage = () => {
    const screenSize = Dimensions.get('window');
    const imageSize = {
      width: screenSize.width,
      height: screenSize.height - scaleModerate(375, 1),
    };
    return (
      <Image
        style={[styles.image, imageSize]}
        source={require('../assets/images/logo.jpeg')}
      />
    );
  };

  onLoginButtonPressed = () => {
    console.log(this.state)
    this.props.handleSubmit(this.state);
    // this.props.navigation.navigate('Home');
    this.setState({
      userName: '',
      password: '',
    });
  };
  onChatTestPressed = () => {
    this.props.navigation.navigate('messageTest');
  };

  onSignUpButtonPressed = () => {
    this.props.navigation.push('signUpScreen');
  };

  render = () => {
    return (
      <KeyboardAvoidingView
        onStartShouldSetResponder={() => true}
        onResponderRelease={() => Keyboard.dismiss()}
        style={styles.screen}
      >
        {this.renderImage()}
        <View style={[styles.container, styles.contcenter]}>
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
            placeholder="Password"
            secureTextEntry
            name="password"
            onChangeText={text => {
              this.setState({
                password: text,
              });
            }}
            value={this.state.password}
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
              onPress={this.onLoginButtonPressed}
            >
              <View>
                <Text
                  style={{
                    marginTop: 8,
                    fontSize: 25,
                    alignSelf: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  LOGIN
                </Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <View style={styles.footer}>
            <View style={styles.textRow}>
              <RkText rkType="primary3">Don’t have an account? </RkText>
              <RkButton rkType="clear">
                <RkText
                  rkType="header6"
                  style={{ fontWeight: 'bold' }}
                  onPress={this.onSignUpButtonPressed}
                >
                  Sign up now
                </RkText>
              </RkButton>
              <RkButton rkType="clear">
                <RkText
                  rkType="header6"
                  style={{ fontWeight: 'bold' }}
                  onPress={this.onChatTestPressed}
                >
                  chat test test
                </RkText>
              </RkButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  };
}
