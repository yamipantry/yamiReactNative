import React from 'react';
import { Login } from '../screens/login';
import { connect } from 'react-redux';
import { auth } from '../client/store/user';

class LoginContainer extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return <Login handleSubmit={handleSubmit} />;
  }
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      const userName = evt.userName;
      const password = evt.password;
      dispatch(auth(userName, password));
    },
  };
};

export default connect(
  mapLogin,
  mapDispatch
)(LoginContainer);
