import React, { Component } from "react";
import { Text, TouchableHighlight, View, Alert } from "react-native";
import Modal from 'react-native-modal'
import axios from "axios";
import { webserver } from '../../../helperfunction'
import { NavigationActions } from 'react-navigation'

export default class BookmarkModal extends Component {
  state = {
    modalVisible: true
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  sendToBookmarks = async recipeId => {
    try {
      const id = recipeId
      const {data} = await axios.post(`${webserver}/api/bookmarks`, {recipeId: id});
    } catch (err) {
      console.error(err);
    }
  };

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
                Are you absolutely sure?
              </Text>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.props.navigation.navigate("SingleRecipe");
                }}
              >

                <Text
                  style={{
                    backgroundColor: "blue",
                    margin: 5,
                    width: 100,
                    height: 30,
                    textAlign: "center",
                    textAlignVertical: 'center',
                    alignSelf: "center",
                    borderRadius: 40,
                    color: "white"
                  }}
                >
                  Cancel
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.props.navigation.navigate("Recipes");
                  this.sendToBookmarks(
                    this.props.navigation.getParam("recipeId")
                  );
                }}
              >
                <Text
                  style={{
                    backgroundColor: "blue",
                    margin: 5,
                    width: 100,
                    height: 30,
                    textAlignVertical: 'center',
                    textAlign: "center",
                    alignSelf: "center",
                    color: "white",
                    borderRadius: 15
                  }}
                >
                  OK
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
