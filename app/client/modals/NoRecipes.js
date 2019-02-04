import React from "react";
import Modal from "react-native-modal";
import { Text, TouchableHighlight, View } from "react-native";

export default class NoRecipes extends React.Component {
  state = {
    modalVisible: true
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View
        style={{ marginTop: 22, justifyContent: "center", alignSelf: "center" }}
      >
        <Modal
          backdropOpacity={0.5}
          transparent={true}
          isVisible={this.state.modalVisible}
        >
          <View
            style={{
              width: 300,
              height: 200,
              backgroundColor: "lightblue",
              justifyContent: "center",
              alignSelf: "center",
              alignItems: "center",
              borderRadius: 25
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                You Have No Matching Recipes
              </Text>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.props.navigation.navigate("Home", {editMode: true});
                }}
              >
                <Text
                  style={{
                    backgroundColor: "blue",
                    margin: 5,
                    width: 100,
                    height: 30,
                    textAlign: "center",
                    textAlignVertical: "center",
                    alignSelf: "center",
                    borderRadius: 40,
                    color: "white"
                  }}
                >
                  Your Pantry
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
