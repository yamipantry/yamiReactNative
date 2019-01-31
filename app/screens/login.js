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
    this.props.handleSubmit(this.state);
    this.props.navigation.navigate('Pantry');
  };

  onSignUpButtonPressed = () => {
    this.props.navigation.navigate('SignUp');
  };

  render = () => (
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
            <View style={styles.textRow}>
              <Text style={styles.buttonText}>LOGIN</Text>
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
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
