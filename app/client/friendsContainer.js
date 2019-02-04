import React from 'react';
import { Friends } from '../screens/friends';
import { connect } from 'react-redux';
import { addFriend, friendsList } from '../client/store/friends';

class FriendsContainer extends React.Component {
  render() {
    const { handleSubmit, user, loadFriends, friends } = this.props;
    return (
      <Friends
        loadFriends={loadFriends}
        handleSubmit={handleSubmit}
        user={user}
        friends={friends}
        navigation={this.props.navigation}
      />
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
    friends: state.friends,
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      const friend = evt.friend;
      dispatch(addFriend(friend));
    },
    loadFriends: () => dispatch(friendsList()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(FriendsContainer);
