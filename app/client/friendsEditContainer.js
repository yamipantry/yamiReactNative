import React from 'react';
import { FriendsEdit } from '../screens/friendsEdit';
import { View } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import { addFriend, removeFriend, friendsList } from '../client/store/friends';

class FriendsEditContainer extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Friends',
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1,
      },
      headerRight: (
        <View style={{ padding: 6 }}>
          <RkButton
            rkType="outline small"
            style={{ width: 45 }}
            onPress={() => navigation.navigate('Friends')}
          >
            Done
          </RkButton>
        </View>
      ),
    };
  };

  render() {
    const {
      handleSubmit,
      user,
      loadFriends,
      friends,
      handleRemove,
    } = this.props;
    return (
      <FriendsEdit
        loadFriends={loadFriends}
        handleSubmit={handleSubmit}
        handleRemove={handleRemove}
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
    handleRemove(id) {
      dispatch(removeFriend(id));
    },
    loadFriends: () => dispatch(friendsList()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(FriendsEditContainer);
