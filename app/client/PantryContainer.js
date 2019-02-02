import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { RkText, RkButton } from "react-native-ui-kitten";
import { webserver } from "../../helperfunction";
import styles from "../assets/styles";
import PantryEdit from "../screens/pantryEdit";
import axios from "axios";
import { connect } from "react-redux";
import store from "./store";
import { recipesThunk, pantryUpdate } from "./store";
import LinearGradient from "react-native-linear-gradient";
import { scaleVertical, randomString } from "../utils/scale";

class Pantry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      pantry: this.props.user.pantryItems,
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
    console.log("suggestions", this.state.suggestions);
  }

  async addItem() {
    // const method = "add";
    const obj = { item: this.state.input, method: 'add' };
    await store.dispatch(pantryUpdate(obj))
    this.setState({
      input: ""
    });
  }

  async deleting(name) {
    const obj = { item: name, method: 'deleted' };
    await store.dispatch(pantryUpdate(obj))

  }

  render() {
    const { pantryItems, profileImage, userName } = this.props.user;
    let editing = this.props.navigation.getParam('editMode', false)
    return (
      <ScrollView>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Welcome, {userName}</Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>{randomString()}</Text>
        <Image
          source={{ uri: `${webserver}${profileImage}` }}
          style={styles.imageSingleRecipe}
        />
        {editing && (
          <PantryEdit
            editMode={editing}
            pantryItems={pantryItems}
            handleChange={this.handleChange}
            input={this.state.input}
            addItem={this.addItem}
            deleted={this.deleting}
            suggestions={this.state.suggestions}
          />
        )}
        {!editing && (
          <PantryEdit
            pantryItems={pantryItems}
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
              store.dispatch(recipesThunk());
              editing = false
              this.props.navigation.navigate("Recipes");
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
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Pantry);
