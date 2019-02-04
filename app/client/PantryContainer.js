<<<<<<< HEAD
import React from 'react';
import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import { RkText, RkButton } from 'react-native-ui-kitten';
import { webserver } from '../../helperfunction';
import styles from '../assets/styles';
import PantryEdit from '../screens/pantryEdit';
import axios from 'axios';
import { connect } from 'react-redux';
import store from './store';
import { recipesThunk } from './store';
import LinearGradient from 'react-native-linear-gradient';
import { scaleVertical } from '../utils/scale';
=======
import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { RkText, RkButton } from "react-native-ui-kitten";
import { webserver } from "../../helperfunction";
import styles from "../assets/styles";
import PantryEdit from "../screens/pantryEdit";
import axios from "axios";
import { connect } from "react-redux";
import store from "./store";
import { pantryUpdate } from "./store";
import LinearGradient from "react-native-linear-gradient";
import { scaleVertical, randomString } from "../utils/scale";
>>>>>>> origin

class Pantry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
<<<<<<< HEAD
      input: '',
      pantry: [],
=======
      input: "",
      loading: true
>>>>>>> origin
    };
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleting = this.deleting.bind(this);
  }

<<<<<<< HEAD
  async componentDidMount() {
    await this.setState({
      pantry: this.props.user.pantryItems,
    });
=======
  load = async () => {
    if(!this.state.loading){
      this.setState({loading: true})
    }
    this.setState({loading: false})
  }

  componentDidMount() {
    setTimeout(() => {
      this.load()
    }, 10)
>>>>>>> origin
  }

  async handleChange(evt) {
    await this.setState({
<<<<<<< HEAD
      input: evt,
=======
      input: evt
>>>>>>> origin
    });

    const { data } = await axios.get(
      `${webserver}/api/ingredients?name=${this.state.input}`
    );

    await this.setState({
      suggestions: data,
    });
  }

  async addItem() {
<<<<<<< HEAD
    const method = 'add';
    const obj = { item: this.state.input };
    const { data } = await axios.put(`${webserver}/api/pantry/${method}`, obj);
    this.setState({
      pantry: data.pantryItems,
      input: '',
=======
    const obj = { item: this.state.input, method: 'add' };
    await store.dispatch(pantryUpdate(obj))
    this.setState({
      input: "",
      suggestions: []
>>>>>>> origin
    });
  }

  async deleting(name) {
<<<<<<< HEAD
    const method = 'deleted';
    const { data } = await axios.put(`${webserver}/api/pantry/${method}`, name);
    this.setState({
      pantry: data.pantryItems,
    });
=======
    const obj = { item: name, method: 'deleted' };
    await store.dispatch(pantryUpdate(obj))

>>>>>>> origin
  }

  render() {
    const { pantryItems, profileImage, userName } = this.props.user;
    let editing = this.props.navigation.getParam('editMode', false)
    if(this.state.loading){
      return (
        <View><Text>Loading</Text></View>
      )
    }
    return (
      <ScrollView
        keyboardShouldPersistTaps='always'>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>Welcome, {userName}</Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>{randomString()}</Text>
        <Image
          source={{ uri: `${webserver}${profileImage}` }}
          style={styles.imageSingleRecipe}
        />
<<<<<<< HEAD
        {!editMode && (
          <LinearGradient
            colors={['#8a2387', '#e94057', '#f27121']}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              alignSelf: 'center',
              height: scaleVertical(45),
              marginVertical: 12,
              borderRadius: 35,
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
                  alignSelf: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                Edit Pantry
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
        {editMode && (
          <LinearGradient
            colors={['#8a2387', '#e94057', '#f27121']}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              alignSelf: 'center',
              height: scaleVertical(45),
              marginVertical: 12,
              borderRadius: 35,
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
                  alignSelf: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                Done
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        )}

        {editMode && (
=======
        {editing && (
>>>>>>> origin
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
          colors={['#8a2387', '#e94057', '#f27121']}
          start={{ x: 0.0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={{
            alignSelf: 'center',
            height: scaleVertical(45),
            marginVertical: 12,
            borderRadius: 35,
          }}
        >
          <TouchableOpacity
            style={{ width: 200 }}
            onPress={() => {
<<<<<<< HEAD
              this.props.navigation.navigate('Recipes');
              this.setState({ editMode: false });
              store.dispatch(recipesThunk());
            }}
=======
            this.props.navigation.navigate('Recipes')}}
>>>>>>> origin
          >
            <Text
              style={{
                marginTop: 8,
                fontSize: 25,
                alignSelf: 'center',
                color: 'white',
                fontWeight: 'bold',
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
    user: state.user,
  };
};

export default connect(mapStateToProps)(Pantry);
