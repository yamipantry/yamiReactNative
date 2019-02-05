import React from 'react';
import { Friends } from '../screens/friends';
import { connect } from 'react-redux';
import { friendsList } from '../client/store/friends';

class FriendsContainer extends React.Component {
  render() {
    const { user, loadFriends, friends } = this.props;
    return (
      <Friends
        loadFriends={loadFriends}
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
    loadFriends: () => dispatch(friendsList()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(FriendsContainer);
