import React from 'react';
import { SignUp } from '../screens/signUp';
import { connect } from 'react-redux';
import { authSignUp, auth } from '../client/store/user';

class SignUpContainer extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <SignUp handleSubmit={handleSubmit} navigation={this.props.navigation} />
    );
  }
}

const mapSignUp = state => {
  return {
    name: 'signup',
    displayName: 'signup',
    error: state.user.error,
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      const userName = evt.userName;
      const email = evt.email;
      const password = evt.password;
      const password2 = evt.password2;
      dispatch(authSignUp(userName, email, password, password2));
      dispatch(auth(userName, password))
    },
  };
};

export default connect(
  mapSignUp,
  mapDispatch
)(SignUpContainer);
