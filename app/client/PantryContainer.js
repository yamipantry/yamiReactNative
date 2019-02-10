import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { RkText, RkButton } from 'react-native-ui-kitten';
import { webserver } from '../../helperfunction';
import styles from '../assets/styles';
import PantryEdit from '../screens/pantryEdit';
import axios from 'axios';
import { connect } from 'react-redux';
import store from './store';
import { pantryUpdate, initialize } from './store';
import LinearGradient from 'react-native-linear-gradient';
import { scaleVertical, randomString } from '../utils/scale';

class Pantry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      input: '',
      loading: true,
      toggle: true,
    };
  }

  load = async () => {
    if (!this.state.loading) {
      this.setState({ loading: true });
    }
    this.setState({ loading: false });
  };

  componentDidMount() {
    this.load();
  }

  handleChange = async evt => {
    await this.setState({
      input: evt,
    });

    const { data } = await axios.get(
      `${webserver}/api/ingredients?name=${this.state.input}`
    );

    await this.setState({
      suggestions: data,
    });
  };

  addItem = async () => {
    const obj = { item: this.state.input, method: 'add' };
    await store.dispatch(pantryUpdate(obj));
    this.setState({
      input: '',
      suggestions: [],
    });
  };

  deleting = async name => {
    const obj = { item: name, method: 'deleted' };
    await store.dispatch(pantryUpdate(obj));
  };

  //toggles the edit/done buttons in the header

  static navigationOptions = ({ navigation }) => {
    if (!navigation.state.params) {
      return {
        headerRight: (
          <View style={{ paddingRight: 20 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home', { editMode: true });
              }}
            >
              <Image
                style={{
                  height: 25,
                  width: 25,
                }}
                source={require('../assets/images/edit.png')}
              />
            </TouchableOpacity>
          </View>
        ),
      };
    }
    if (navigation.state.params.editMode === true) {
      return {
        headerRight: (
          <View style={{ paddingRight: 20 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home', { editMode: false });
              }}
            >
              <Image
                style={{
                  height: 25,
                  width: 25,
                }}
                source={require('../assets/images/done.png')}
              />
            </TouchableOpacity>
          </View>
        ),
      };
    } else if (navigation.state.params.editMode === false) {
      return {
        headerRight: (
          <View style={{ paddingRight: 20 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home', { editMode: true });
              }}
            >
              <Image
                style={{
                  height: 25,
                  width: 25,
                }}
                source={require('../assets/images/edit.png')}
              />
            </TouchableOpacity>
          </View>
        ),
      };
    }
  };

  render() {
    const { pantryItems, profileImage, userName } = this.props.user;
    let editing = this.props.navigation.getParam('editMode', false);
    if (this.state.loading) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        {!editing && (
          <View>
            <Text
              style={{
                fontSize: 20,
                alignSelf: 'center',
                paddingTop: 5,
                marginRight: 10,
              }}
            >
              Welcome, {userName}.{'   '}
              <Image
                source={{ uri: `${webserver}${profileImage}` }}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 35 / 2,
                }}
              />
            </Text>
            <Text
              style={{ fontSize: 20, alignSelf: 'center', paddingBottom: 5 }}
            >
              {randomString()}
            </Text>
          </View>
        )}

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
        <ScrollView
          style={{ paddingTop: 10 }}
          keyboardShouldPersistTaps="always"
        >
          {!editing && <PantryEdit pantryItems={pantryItems} />}
        </ScrollView>
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
              this.props.navigation.navigate('Recipes');
            }}
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
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Pantry);
