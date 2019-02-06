import React from "react";
import { Login } from "../screens/login";
import { connect } from "react-redux";
import { auth } from "../client/store/user";
import { Alert } from "react-native";
import store from "./store";

class LoginContainer extends React.Component {
  constructor() {
    super();
  }
  handleSubmit = async evt => {
    const userName =
      evt.userName.charAt(0).toUpperCase() + evt.userName.slice(1);
    const password = evt.password;
    await store.dispatch(auth(userName, password));
    if (!this.props.user || this.props.user.error) {
      Alert.alert("Wrong");
    }else{
    this.props.navigation.navigate('Home');
    }
  };
  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        navigation={this.props.navigation}
        user={this.props.user}
      />
    );
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


export default connect(
  mapLogin,
)(LoginContainer);
