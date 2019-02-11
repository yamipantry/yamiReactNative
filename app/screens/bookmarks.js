import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { RkText, RkCard } from 'react-native-ui-kitten';
import styles from '../assets/styles';
import { webserver } from '../../helperfunction';
import { Rating } from 'react-native-ratings';

export default class Bookmarks extends React.Component {
  constructor() {
    super();
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      delayPressIn={20}
      activeOpacity={0.8}
      onPress={() => {
        this.props.ranking();
        this.props.navigation.navigate('SingleRecipe', {
          id: item.recipe.id,
          bookmarks: true,
        });
      }}
    >
      <RkCard
        style={{
          marginVertical: 8,
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'lightgrey',
        }}
      >
        <Image
          rkCardImg
          style={{ width: 120, height: 120 }}
          source={{ uri: `${webserver}${item.recipe.imageUrl}` }}
        />

        <View style={{ alignItems: 'flex-start' }}>
          <View rkCardContent>
            <RkText
              rkType="secondary6 hintColor"
              style={{ textAlign: 'center', fontSize: 19 }}
            >
              {item.recipe.name}
            </RkText>
          </View>

          <Rating
            style={{ marginLeft: 17 }}
            //showRating
            onFinishRating={this.props.bookmarks.star}
            imageSize={16}
          />
        </View>
      </RkCard>
    </TouchableOpacity>
  );

  render() {
    const { bookmarks } = this.props || [];
    return (
      <ScrollView>
        <FlatList
          data={bookmarks}
          renderItem={this.renderItem}
          style={styles.recipescontainer}
          keyExtractor={(item, idx) => `${idx}`} //looking for different key other than idx
        />
      </ScrollView>
    );
  }
}
