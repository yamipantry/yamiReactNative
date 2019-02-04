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

export default class YamiDinnerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      yamiRecipe: '',
      description: '',
      streetName: '',
      city: '',
      zip: '',
      state: 'CA',
    };
    this.onCreateYammiDinnerButtonPressed = this.onCreateYammiDinnerButtonPressed.bind(
      this
    );
  }

  onCreateYammiDinnerButtonPressed() {
    this.props.handleSubmit(this.state);
    this.props.navigation.navigate('Home');
  }

  render() {
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
                      yamiRecipe: text,
                    });
                  }}
                  rkType="rounded"
                  value={this.state.yamiRecipe}
                  placeholder="Yami Recipe"
                />
                <RkTextInput
                  onChangeText={text => {
                    this.setState({
                      description: text,
                    });
                  }}
                  rkType="rounded"
                  value={this.state.description}
                  placeholder="Description"
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
                    onPress={this.onCreateYammiDinnerButtonPressed}
                  >
                    <View style={styles.textRow}>
                      <Text style={styles.buttonText}>
                        Create Yami Dinner !
                      </Text>
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
