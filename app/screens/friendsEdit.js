import React from 'react';
import styles from '../assets/styles';
import {
  FlatList,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { RkText, RkButton } from 'react-native-ui-kitten';
import { webserver } from '../../helperfunction';

export class FriendsEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  componentDidMount() {
    this.props.loadFriends();
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
            style={styles.editFriendButtons}
            rkType="outline small"
            onPress={() => {

              const send = item.id;
              if (send) {
                await this.props.handleRemove(send);
                await this.props.loadFriends();
              }
            }}
          >
            -
          </RkButton>
        </View>
      </TouchableOpacity>
    );
  };

  renderSeparator = () => <View style={styles.separator} />;

  RenderFlatListStickyheader = () => {
    var stickyHeaderView = (
      <View style={styles.addContainer}>
        <TextInput
          style={{
            borderRadius: 3,
            textAlign: 'center',
            color: 'black',
            fontSize: 18,
            paddingLeft: 14,
          }}
          placeholder="Email or Username"
          name="input"
          onChangeText={text => {
            this.setState({
              input: text,
            });
          }}
          value={this.state.input}
        />
        <RkButton
          rkType="outline small"
          style={styles.editFriendButtons}
          onPress={() => {
            const send = this.state.input;
            if (send) {
              this.props.handleSubmit(send);
            }
          }}
        >
          +
        </RkButton>
      </View>
    );

    return stickyHeaderView;
  };

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
        extraData={this.props.friends}
        renderItem={this.renderItem2}
        keyExtractor={this.extractItemKey}
        ListHeaderComponent={this.RenderFlatListStickyheader}
        stickyHeaderIndices={[0]}
        ItemSeparatorComponent={this.renderSeparator}
        enableEmptySections
      />
    );
  };
}
