import React from 'react';
import {
  FlatList,
  View,
  // Platform,
  // Image,
  // TouchableOpacity,
  Keyboard,
  TextInput,
  // InteractionManager,
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';

import sockets from './socket';
import socket from './socket';

// import getConversation from './store';

// import _ from 'lodash';

// const moment = require('moment');
const Conversations = [
  {
    withUserId: 1,
    messages: [
      {
        id: 0,
        type: 'out',
        time: -300,
        text: 'Hey, how’ve you been?',
      },
      {
        id: 1,
        time: -240,
        type: 'in',
        text:
          'Yeah, not bad, actually I finally got a call back from that job that I interviewed for, and guess what? I got it!',
      },
      {
        id: 2,
        time: -230,
        type: 'out',
        text:
          'Awesome! Yeah, well done, that’s really great to hear. Do you start right away?',
      },
      {
        id: 3,
        time: -100,
        type: 'out',
        text:
          'Well, uhm yes and no, I go in for training tomorrow, but I don’t really start until next week. ' +
          'Do you have some time this weekend, maybe we could get together?',
      },
      {
        id: 4,
        time: -45,
        type: 'in',
        text:
          'I’ve got a lot planned this weekend, just running around, doing loads of stuff, but Friday’s pretty open.',
      },
      {
        id: 5,
        time: -5,
        type: 'out',
        text: 'That works pretty well for me!',
      },
    ],
  },
  {
    withUserId: 5,
    messages: [
      {
        id: 0,
        type: 'out',
        time: -300,
        text: 'I have no idea what to buy for Mary for her birthday.',
      },
      {
        id: 1,
        time: -240,
        type: 'in',
        text:
          'Me, neither! Would you like to go in and buy her a gift together?',
      },
      {
        id: 2,
        time: -100,
        type: 'out',
        text: 'If I remember right, she likes music, skiing, and reading',
      },
      {
        id: 3,
        time: -45,
        type: 'out',
        text:
          'You know, maybe we could get her some concert tickets. Who would know her favorite groups?',
      },
      {
        id: 4,
        time: -25,
        type: 'in',
        text: 'Her roommate, Malia, might know what her favorite groups are.',
      },
      {
        id: 5,
        time: -5,
        type: 'out',
        text:
          "Cool! Let's give Malia a call and ask her for her help right now",
      },
    ],
  },
];

export class Chat extends React.Component {
  // static navigationOptions = ({ navigation }) => {
  //   const userId = navigation.state.params
  //     ? navigation.state.params.userId
  //     : undefined;
  //   const user = data.getUser(userId);
  //   return {
  //     headerTitle: Chat.renderNavigationTitle(navigation, user),
  //     headerRight: Chat.renderNavigationAvatar(navigation, user),
  //   };
  // };

  constructor(props) {
    super(props);
    // const userId = 1; //this.props.navigation.getParam('userId', undefined);
    this.state = {
      data: Conversations[0],
      message: '', //getConversation(3),
    };
  }

  componentDidMount() {
    // InteractionManager.runAfterInteractions(() => {
    //   this.listRef.scrollToEnd();
    // });
  }

  // setListRef = ref => {
  //   this.listRef = ref;
  // };

  extractItemKey = item => `${item.id}`;

  // scrollToEnd = () => {
  //   if (Platform.OS === 'ios') {
  //     this.listRef.scrollToEnd();
  //   } else {
  //     _.delay(this.listRef.scrollToEnd, 100);
  //   }
  // };

  onSendButtonPressed = () => {
    if (!this.state.message) {
      return;
    }
    this.state.data.messages.push({
      id: this.state.data.messages.length,
      time: 0,
      type: 'out',
      text: this.state.message,
    });
    this.setState({ message: '' });
    //this.scrollToEnd(true);
    console.log(this.state.message);
    socket.emit('chat message', this.state.message);
  };

  // static onNavigationTitlePressed = (navigation, user) => {
  //   navigation.navigate('ProfileV1', { id: user.id });
  // };

  // static onNavigationAvatarPressed = (navigation, user) => {
  //   navigation.navigate('ProfileV1', { id: user.id });
  // };

  // renderDate = date => (
  //   <RkText style={styles.time} rkType="secondary7 hintColor">
  //     {moment()
  //       .add(date, 'seconds')
  //       .format('LT')}
  //   </RkText>
  // );

  renderItem = ({ item }) => {
    const isIncoming = item.type === 'in';
    const backgroundColor = 'lightblue';
    // const backgroundColor = isIncoming
    //   ? RkTheme.current.colors.chat.messageInBackground
    //   : RkTheme.current.colors.chat.messageOutBackground;
    const itemStyle = isIncoming ? styles.itemIn : styles.itemOut;
    return (
      <View style={[styles.item, itemStyle]}>
        {!isIncoming}
        <View style={[styles.balloon, { backgroundColor }]}>
          <RkText rkType="primary2 mediumLine chat" style={{ paddingTop: 5 }}>
            {item.text}
          </RkText>
        </View>
        {isIncoming}
      </View>
    );
  };

  render = () => (
    <RkAvoidKeyboard
      style={styles.container}
      onResponderRelease={Keyboard.dismiss}
    >
      <FlatList
        extraData={this.state}
        style={styles.list}
        data={this.state.data.messages}
        keyExtractor={this.extractItemKey}
        renderItem={this.renderItem}
      />
      <View style={styles.footer}>
        <RkButton style={styles.plus} rkType="clear">
          <RkText rkType="awesome secondaryColor">+</RkText>
        </RkButton>
        <TextInput
          onChangeText={text => {
            this.setState({ message: text });
          }}
          value={this.state.message}
          rkType="row sticker"
          placeholder="Add a comment..."
        />
        <RkButton
          onPress={this.onSendButtonPressed}
          style={styles.send}
          rkType="circle highlight"
        />
      </View>
    </RkAvoidKeyboard>
  );
}

const styles = RkStyleSheet.create(theme => ({
  header: {
    alignItems: 'center',
  },
  avatar: {
    marginRight: 16,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.screen.base,
  },
  list: {
    paddingHorizontal: 17,
  },
  footer: {
    flexDirection: 'row',
    minHeight: 60,
    padding: 10,
    backgroundColor: theme.colors.screen.alter,
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
  },
  itemIn: {},
  itemOut: {
    alignSelf: 'flex-end',
  },
  balloon: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 20,
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
  },
  plus: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginRight: 7,
  },
  send: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
}));
