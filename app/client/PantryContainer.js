import React from "react";
import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import { RkText, RkButton } from "react-native-ui-kitten";
import { webserver } from "../../helperfunction";
import styles from "../assets/styles";
import PantryEdit from "../screens/pantryEdit";
import axios from "axios";
import { connect } from "react-redux";
import store from "./store";
import { recipesThunk } from "./store";
import LinearGradient from "react-native-linear-gradient";
import { scaleVertical } from "../utils/scale";

class Pantry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      suggestions: [],
      input: "",
      pantry: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleting = this.deleting.bind(this);
  }

  async componentDidMount() {
    await this.setState({
      pantry: this.props.user.pantryItems
    });
  }

  async handleChange(evt) {
    await this.setState({
      input: evt
    });    

    const { data } = await axios.get(
      `${webserver}/api/ingredients?name=${this.state.input}`
    );   
    
    await this.setState({
      suggestions: data
    });
    console.log('suggestions', this.state.suggestions)

  }

  async addItem() {
    const method = "add";
    const obj = { item: this.state.input };
    const { data } = await axios.put(`${webserver}/api/pantry/${method}`, obj);
    this.setState({
      pantry: data.pantryItems,
      input: ""
    });
  }

  async deleting(name) {
    const method = "deleted";
    const { data } = await axios.put(`${webserver}/api/pantry/${method}`, name);
    this.setState({
      pantry: data.pantryItems
    });
  }

  render() {
    const { pantryItems, profileImage } = this.props.user;
    const { editMode } = this.state;
    return (
      <View>
        <Image
          source={{ uri: `${webserver}${profileImage}` }}
          style={styles.imageSingleRecipe}
        />
        {!editMode && (
          <LinearGradient
            colors={["#8a2387", "#e94057", "#f27121"]}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              alignSelf: "center",
              height: scaleVertical(45),
              marginVertical: 12,
              borderRadius: 35
            }}
          >
            <TouchableOpacity
              style={{ width: 200 }}
              onPress={() => this.setState({ editMode: true })}
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
                Edit Pantry
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
        {editMode && (
          <LinearGradient
            colors={["#8a2387", "#e94057", "#f27121"]}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              alignSelf: "center",
              height: scaleVertical(45),
              marginVertical: 12,
              borderRadius: 35
            }}
          >
            <TouchableOpacity
              style={{ width: 200 }}
              onPress={() => this.setState({ editMode: false })}
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
                Done
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        )}

        {editMode && (
          <PantryEdit
            editMode={editMode}
            pantryItems={this.state.pantry ? this.state.pantry : pantryItems}
            handleChange={this.handleChange}
            input={this.state.input}
            addItem={this.addItem}
            deleted={this.deleting}
            suggestions={this.state.suggestions}
          />
        )}
        {!editMode && (
          <PantryEdit
            pantryItems={this.state.pantry ? this.state.pantry : pantryItems}
          />
        )}
        <LinearGradient
          colors={["#8a2387", "#e94057", "#f27121"]}
          start={{ x: 0.0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={{
            alignSelf: "center",
            height: scaleVertical(45),
            marginVertical: 12,
            borderRadius: 35
          }}
        >
          <TouchableOpacity
            style={{ width: 200 }}
            onPress={() => {
              this.props.navigation.navigate("Recipes");
              this.setState({ editMode: false });
              store.dispatch(recipesThunk());
            }}
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
              Generate
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Pantry);
