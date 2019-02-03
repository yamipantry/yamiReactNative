import React from 'react';
import styles from '../assets/styles';
import { webserver } from '../../helperfunction';
import { FlatList, Image, View, TouchableOpacity } from 'react-native';
import { RkText, RkCard } from 'react-native-ui-kitten';
import store from '../client/store'
import {getRecipe} from '../client/store'

export class RecipePresentational extends React.Component {
  static navigationOptions = {
    title: 'Recipes'.toUpperCase(),
  };

  extractItemKey = item => `${item.id}`;

  renderItem = ({ item }) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => {
          this.props.navigation.navigate('SingleRecipe', {id: item.id})
      }
      }
    >
      <RkCard rkType="horizontal" style={styles.recipescard}>
        <Image rkCardImg source={{ uri: `${webserver}${item.imageUrl}` }} />
        <View rkCardContent>
          <RkText
            rkType="secondary6 hintColor"
            style={{ textAlign: 'center', fontSize: 30 }}
          >
            {`${item.name}`}
          </RkText>
        </View>
      </RkCard>
    </TouchableOpacity>
  );

  render() {
    const { recipes } = this.props || [];
    return (
      <View>
        <FlatList
          data={recipes}
          renderItem={this.renderItem}
          keyExtractor={this.extractItemKey}
          style={styles.recipescontainer}
        />
      </View>
    );
  }
}

export default RecipePresentational;
