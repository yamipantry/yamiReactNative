import React from "react";
import { View, FlatList, TouchableOpacity, Image, Button } from "react-native";
import { RkText } from "react-native-ui-kitten";
import { webserver } from "../../helperfunction";
import styles from "../assets/styles";
import PantryEdit from "../screens/pantryEdit";
import axios from "axios";
import { connect } from "react-redux";
import store from "./store";
import { recipesThunk } from "./store";
class Pantry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      suggestions: [],
      input: "",
      pantry: [],
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
  }

  async addItem() {
    const method = "add";
    const obj = { item: this.state.input };
    const { data } = await axios.put(`${webserver}/api/pantry/${method}`, obj);
    this.setState({
      pantry: data.pantryItems,
      input: ''
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
        {!editMode &&
          <Button
          title="Edit Pantry"
          onPress={() => this.setState({ editMode: true })}
        />
        }
        {editMode &&
          <Button
          title="Done"
          onPress={() => this.setState({ editMode: false })}
        />
        }
        
        {editMode && (
          <PantryEdit
            editMode={editMode}
            pantryItems={this.state.pantry ? this.state.pantry : pantryItems}
            handleChange={this.handleChange}
            input={this.state.input}
            addItem={this.addItem}
            deleted={this.deleting}
          />
        )}
        {!editMode && (
          <PantryEdit
            pantryItems={this.state.pantry ? this.state.pantry : pantryItems}
          />
        )}
        <Button
          title="Generate Recipe"
          onPress={() => {
            this.props.navigation.navigate("Recipes");
            this.setState({editMode: false})
            store.dispatch(recipesThunk());
          }}
        />
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
