import React from 'react';
import { Profile } from '../screens/profile';
import { connect } from 'react-redux';
import { update } from '../client/store/user';

class ProfileContainer extends React.Component {
  render() {
    console.log(this.props, 'profile cont');
    const { handleSubmit, user } = this.props;

    return (
      <Profile
        handleSubmit={handleSubmit}
        user={user}
        navigation={this.props.navigation}
      />
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      const id = evt.id;
      const object = {
        userName: evt.userName,
        email: evt.email,
        firstName: evt.firstName,
        lastName: evt.lastName,
        streetName: evt.streetName,
        city: evt.city,
        state: evt.state,
        zip: evt.zip,
        profileImage: evt.profileImage,
      };

      dispatch(update(id, object));
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(ProfileContainer);
