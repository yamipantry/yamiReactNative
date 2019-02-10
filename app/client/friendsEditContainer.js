import React from 'react';
import { FriendsEdit } from '../screens/friendsEdit';
import { View, TouchableOpacity, Image } from 'react-native';
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
        <View style={{ paddingRight: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
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
    handleSubmit(friend) {
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
