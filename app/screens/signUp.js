import React from 'react';
import { View, Image, Keyboard, TouchableOpacity, Text } from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkAvoidKeyboard,
} from 'react-native-ui-kitten';
import LinearGradient from 'react-native-linear-gradient';
import { scaleVertical } from '../utils/scale';

export class SignUp extends React.Component {
  static navigationOptions = {
    header: null,
  };

  renderImage = () => (
    <Image
      style={styles.image}
      source={require('../assets/images/logo.jpeg')}
    />
  );

  // onSignUpButtonPressed = () => {
  //   this.props.navigation.navigate('Tasks');
  // };

  onSignInButtonPressed = () => {
    this.props.navigation.navigate('Login');
  };

  render = () => {
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={() => true}
        onResponderRelease={() => Keyboard.dismiss()}
      >
        <View style={{ alignItems: 'center' }}>
          {this.renderImage()}
          <RkText rkType="h1" style={{ fontWeight: 'bold', fontSize: 30 }}>
            Registration
          </RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput rkType="rounded" placeholder="Username" />
            <RkTextInput rkType="rounded" placeholder="Email" />
            <RkTextInput
              rkType="rounded"
              placeholder="Password"
              secureTextEntry
            />
            <RkTextInput
              rkType="rounded"
              placeholder="Confirm Password"
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

const styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 16,
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: theme.colors.screen.base,
  },
  image: {
    marginBottom: 10,
    height: scaleVertical(210),
    resizeMode: 'contain',
  },
  content: {
    justifyContent: 'space-between',
  },
  save: {
    marginVertical: 20,
  },

  footer: {
    flex: 0,
    justifyContent: 'flex-end',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: scaleVertical(14),
    marginHorizontal: 24,
    justifyContent: 'space-around',
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
}));
