import React from 'react';
import styles from '../assets/styles';
import { View, TouchableOpacity, Image } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import { webserver } from '../../helperfunction';

export class Friends extends React.Component {
  // state = {};

  // componentDidMount() {
  //   this.setState({
  //     id: this.props.user.id,
  //     userName: this.props.user.userName,
  //     email: this.props.user.email,
  //     firstName: this.props.user.firstName,
  //     lastName: this.props.user.lastName,
  //     streetName: this.props.user.streetName,
  //     city: this.props.user.city,
  //     state: this.props.user.state,
  //     zip: this.props.user.zip,
  //     profileImage: this.props.user.profileImage,
  //   });
  // }

  onEditButtonPressed = () => {
    this.props.handleSubmit(this.state);
    this.props.navigation.navigate('FriendsPantry');
  };

  render() {
    const { profileImage } = this.props.user;
    console.log(this.props);
    return (
      <View style={styles.root}>
        <TouchableOpacity onPress={() => this.onItemPressed()}>
          <View style={styles.containerFriends}>
            <View style={styles.CircleContainer}>
              <Image
                source={{ uri: `${webserver}${profileImage}` }}
                style={styles.avatar}
              />
            </View>
            <RkText>Ashley Smith</RkText>
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
      </View>
    );
  }
}
