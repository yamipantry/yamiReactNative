import React from 'react';
import { Friends } from '../screens/friends';
import { connect } from 'react-redux';
import { addFriend } from '../client/store/friends';

class FriendsContainer extends React.Component {
  render() {
    const { handleSubmit, user } = this.props;
    return (
      <Friends
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
      const friend = evt.friend;
      dispatch(addFriend(friend));
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(FriendsContainer);
