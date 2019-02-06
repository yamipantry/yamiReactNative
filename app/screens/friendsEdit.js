import React from 'react';
import styles from '../assets/styles';
import { FlatList, View, TouchableOpacity, Image } from 'react-native';
import { RkText, RkButton } from 'react-native-ui-kitten';
import { webserver } from '../../helperfunction';

export class FriendsEdit extends React.Component {
  async componentDidMount() {
    await this.props.loadFriends();
  }

  extractItemKey = item => `${item.id}`;

  renderItem2 = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.containerFriends}>
          <View style={styles.CircleContainer}>
            <Image
              source={{ uri: `${webserver}${item.profileImage}` }}
              style={styles.avatar}
            />
          </View>
          <RkText>{`${item.firstName} ${item.lastName}`}</RkText>
          <RkButton
            style={{ width: 20, height: 20, position: 'absolute', right: 40 }}
            rkType="outline small circle"
            onPress={async () => {
              const send = item.id;
              if (send) {
                await this.props.handleRemove(send);
                await this.props.loadFriends();
              }
            }}
          >
            X
          </RkButton>
        </View>
      </TouchableOpacity>
    );
  };

  renderSeparator = () => <View style={styles.separator} />;

  render = () => {
    if (this.props.friends.length === 0) {
      return (
        <View>
          <RkText> Add Some Friends </RkText>
        </View>
      );
    }

    return (
      <FlatList
        style={styles.root}
        data={this.props.friends}
        extraData={this.props}
        renderItem={this.renderItem2}
        keyExtractor={this.extractItemKey}
        ItemSeparatorComponent={this.renderSeparator}
        enableEmptySections
      />
    );
  };
}
