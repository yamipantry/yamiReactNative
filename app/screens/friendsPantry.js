import React from 'react';
import styles from '../assets/styles';
import { View } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { RkText } from 'react-native-ui-kitten';
//import { webserver } from '../../helperfunction';

class FriendsPantry extends React.Component {
  static navigationOptions = {
    headerMode: 'screen',
    headerTitle: 'Hi',
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      flexGrow: 1,
    },
    headerRight: <View style={{ padding: 6 }} />,

    headerLeft: (
      <View>
        <RkText
          style={styles.menuText}
          onPress={() => {
            this.props.navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          Menu
        </RkText>
      </View>
    ),
  };

  render() {
    console.log(this.props);
    const friendsId = this.props.navigation.getParam('id');
    const friendsPantryItems = this.props.navigation.getParam('pantry');
    //const image = this.props.navigation.getParam('profileImage');

    return (
      <View>
        <RkText>THIS IS THE FRIENDS PANTRY</RkText>
        <RkText>UserId: {JSON.stringify(friendsId)} </RkText>
        <RkText> {friendsPantryItems} </RkText>
      </View>
    );
  }
}

export default FriendsPantry;
