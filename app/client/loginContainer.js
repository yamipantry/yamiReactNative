import React from "react";
import { Login } from "../screens/login";
import { connect } from "react-redux";
import { auth } from "../client/store/user";
import { Alert, View, Text } from "react-native";
import store from "./store";
import { webserver } from "../../helperfunction";
import axios from "axios";
import { me } from "./store/user";

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      loading: true
    };
  }
  handleSubmit = async evt => {
    const userName =
      evt.userName.charAt(0).toUpperCase() + evt.userName.slice(1);
    const password = evt.password;
    await store.dispatch(auth(userName, password));
    if (!this.props.user || this.props.user.error) {
      Alert.alert("Wrong");
    } else {
      this.props.navigation.navigate("Home");
    }
  };

  async componentDidMount() {
    await store.dispatch(me());
    if (!this.props.user.userName) {
      this.props.navigation.navigate("loginScreen");
    } else {
      this.props.navigation.navigate("Home");
    }
    const { data } = await axios.get(`${webserver}/api/users/loggedIn`);
    if (data) {
      this.setState({
        loggedIn: true
      });
    }
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <View>
          <Text>LOADING</Text>
        </View>
      );
    } else {
      return (
        <Login
          handleSubmit={this.handleSubmit}
          navigation={this.props.navigation}
          user={this.props.user}
        />
      );
    }
  }
}

const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error,
    user: state.user
  };
};

export default connect(mapLogin)(LoginContainer);
