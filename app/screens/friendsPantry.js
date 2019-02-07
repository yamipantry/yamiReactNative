import React from 'react';
import styles from '../assets/styles';
import { View, Image, FlatList, ImageBackground } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import { webserver } from '../../helperfunction';

class FriendsPantry extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const name = navigation.getParam('userName', '');
    const image = navigation.getParam('profileImage', '');
    return {
      headerTitle: `${name}'s Pantry`,
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flexGrow: 1,
      },
      headerRight: (
        <View style={{ padding: 6 }}>
          <Image
            source={{ uri: `${webserver}${image}` }}
            style={styles.avatar}
          />
        </View>
      ),
    };
  };

  extractItemKey = item => `${item.id}`;

  renderItem = ({ item }) => (
    <View style={{ alignItems: 'center', paddingTop: 10 }}>
      <ImageBackground
        source={{
          uri: `${webserver}/Petrol.jpg`,
        }}
        style={{
          width: 108,
          height: 108,
          margin: 5,
        }}
        imageStyle={{ opacity: 0.9, borderRadius: 25 }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <RkText
            style={{
              fontSize: 25,
              alignSelf: 'center',
              color: 'white',
            }}
          >
            {item}
          </RkText>
        </View>
      </ImageBackground>
    </View>
  );

  render = () => {
    const pantry = this.props.navigation.getParam('pantry', []);
    return (
      <FlatList
        numColumns={3}
        style={styles.root}
        data={pantry}
        renderItem={this.renderItem}
        keyExtractor={this.extractItemKey}
        ItemSeparatorComponent={this.renderSeparator}
        enableEmptySections
      />
    );
  };
}

export default FriendsPantry;
