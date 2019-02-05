import React from 'react';
import styles from '../assets/styles';
import { FlatList, View, TouchableOpacity, Image } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import { webserver } from '../../helperfunction';

export class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  async componentDidMount() {
    await this.props.loadFriends();
    this.setState({
      friends: this.props.friends,
    });
  }

  extractItemKey = item => `${item.id}`;

  renderItem = ({ item, idx }) => (
    <TouchableOpacity
      key={idx}
      onPress={() =>
        this.props.navigation.navigate('FriendsPantry', {
          id: item.id,
          userName: item.userName,
          pantry: item.pantryItems,
          profileImage: item.profileImage,
        })
      }
    >
      <View style={styles.containerFriends}>
        <View style={styles.CircleContainer}>
          <Image
            source={{ uri: `${webserver}${item.profileImage}` }}
            style={styles.avatar}
          />
        </View>
        <RkText>{`${item.firstName} ${item.lastName}`}</RkText>
      </View>
    </TouchableOpacity>
  );

  renderSeparator = () => <View style={styles.separator} />;

  render = () => (
    <FlatList
      style={styles.root}
      data={this.state.friends}
      renderItem={this.renderItem}
      keyExtractor={this.extractItemKey}
      ItemSeparatorComponent={this.renderSeparator}
      enableEmptySections
    />
  );
}
