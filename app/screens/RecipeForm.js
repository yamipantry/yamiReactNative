import React from "react";
import styles from "../assets/styles";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Keyboard,
  Text
} from "react-native";
import { RkAvoidKeyboard, RkTextInput } from "react-native-ui-kitten";
import LinearGradient from "react-native-linear-gradient";
import { scaleVertical } from "../utils/scale";
import store from "../client/store";
import { addRecipeAction } from '../client/store/addRecipe'
export default class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      ingredientsIncluded: '',
      instructions: [],
      imageUrl: ""
    };
  }

  onCreateRecipe = async () => {
    await store.dispatch(addRecipeAction(this.state))
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
                      name: text
                    });
                  }}
                  rkType="rounded"
                  value={this.state.name} //change this
                  placeholder="Recipe" //this too
                />
                <RkTextInput
                  onChangeText={text => {
                    this.setState({
                      description: text
                    });
                  }}
                  rkType="rounded"
                  value={this.state.description} //fill out
                  placeholder="Description" //fill out
                />
                <RkTextInput
                  rkType="rounded"
                  onChangeText={(evt) => {
                    this.setState({
                      ingredientsIncluded: evt
                    });
                  }}
                  value={this.state.streetName} //change
                  placeholder="Ingredients" //change
                />
                <RkTextInput
                  rkType="rounded"
                  onChangeText={text => {
                    this.setState({
                      city: text //change
                    });
                  }}
                  value={this.state.city} //change
                  placeholder="City" //change
                />
                <RkTextInput
                  rkType="rounded"
                  onChangeText={text => {
                    this.setState({
                      state: text //change
                    });
                  }}
                  value={this.state.state} //change
                  placeholder="State" //change
                />
                <RkTextInput
                  rkType="rounded"
                  onChangeText={text => {
                    this.setState({
                      zip: text //change
                    });
                  }}
                  value={this.state.zip} //change
                  placeholder="Zip" //change
                />
                <LinearGradient
                  colors={["#8a2387", "#e94057", "#f27121"]}
                  start={{ x: 0.0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={{
                    alignSelf: "stretch",
                    height: scaleVertical(45),
                    marginVertical: 20,
                    borderRadius: 28
                  }}
                >
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.onCreateRecipe} //change
                  >
                    <Text
                      style={{
                        marginTop: 8,
                        fontSize: 25,
                        alignSelf: "center",
                        color: "white",
                        fontWeight: "bold"
                      }}
                    >
                      Put my Text Here
                    </Text>
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
