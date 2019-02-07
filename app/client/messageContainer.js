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

import socket from './socket';
import axios from 'axios';
import { connect } from 'react-redux';
import { webserver } from '../../helperfunction';

// import getConversation from './store';

// import _ from 'lodash';

// const moment = require('moment');

class Chat extends React.Component {
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
      room: this.props.navigation.getParam('name', ''),
      message: '', //getConversation(3),
      messages: ['first', 'second', 'third'],
    };
  }

  async componentDidMount() {
    // InteractionManager.runAfterInteractions(() => {
    //   this.listRef.scrollToEnd();
    // });
    //retrieving all messages for each chat room
    // const { data } = await axios.get(
    //   `${webserver}/api/sockets/room?yamiMessage=${
    //     this.props.yamiDinners.yamiMessage
    //   }`
    // );
    //set state
    // this.setState({
    //   messages: data.message,
    // });
    //update state per message
    const oldMessages = await axios.get(`${webserver}/api/messages`)

    this.setState({
      messages: oldMessages.data
    })
    
    socket.on(this.state.room, msg => {
      
      if (msg) {
        const newMsg = [...this.state.messages, msg]
        this.setState({ messages: newMsg });
      }
    });
  }

  // setListRef = ref => {
  //   this.listRef = ref;
  // };

  // extractItemKey = item => `${item.id}`;

  // scrollToEnd = () => {
  //   if (Platform.OS === 'ios') {
  //     this.listRef.scrollToEnd();
  //   } else {
  //     _.delay(this.listRef.scrollToEnd, 100);
  //   }
  // };

  onSendButtonPressed = () => {
    socket.emit(this.state.room, {message: this.state.message});
    axios.post(`${webserver}/api/messages`, {
      yammiDinnerId: this.state.room,
      message: this.state.message,
    });
    this.setState({ message: '' });
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
    const isIncoming = item.type === 'in' || '';
    const backgroundColor = 'lightblue';
    // const backgroundColor = isIncoming
    //   ? RkTheme.current.colors.chat.messageInBackground
    //   : RkTheme.current.colors.chat.messageOutBackground;
    const itemStyle = isIncoming ? styles.itemIn : styles.itemOut;
    return (
      <View style={[styles.item, itemStyle]}>
        {/* {!isIncoming} */}
        <View style={[styles.balloon, { backgroundColor }]}>
          <RkText rkType="primary2 mediumLine chat" style={{ paddingTop: 5 }}>
            {item.message}
          </RkText>
        </View>
        {/* {isIncoming} */}
      </View>
    );
  };

  render = () => {
    return (
      <RkAvoidKeyboard
        style={styles.container}
        onResponderRelease={Keyboard.dismiss}
      >
        <FlatList
          style={styles.list}
          data={this.state.messages}
          keyExtractor={(item, idx) => `${idx}`}
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
            onPress={() => {
              this.onSendButtonPressed();
            }}
            style={styles.send}
            rkType="circle highlight"
          />
        </View>
      </RkAvoidKeyboard>
    );
  };
}

const mapState = state => {
  return {
    RoomId: state.yamiDinners,
  };
};

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

export default connect(mapState)(Chat);
