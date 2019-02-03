import React from 'react';
import styles from '../assets/styles';
import { webserver } from '../../helperfunction';
import { FlatList, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import { RkText, RkCard } from 'react-native-ui-kitten';

export class RecipePresentational extends React.Component {
  static navigationOptions = {
    title: 'Recipes'.toUpperCase(),
  };


  renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => {
          this.props.navigation.navigate('SingleRecipe', {id: item.id})
      }
      }
    >
      <RkCard rkType="horizontal" style={styles.recipescard}>
        <Image rkCardImg style={styles.recipeImage} source={{ uri: `${webserver}${item.imageUrl}` }} />
        <View rkCardContent>
          <RkText
            rkType="secondary6 hintColor"
            style={{ textAlign: 'center', fontSize: 30 }}
          >
            {item.name}
          </RkText>
        </View>
      </RkCard>
    </TouchableOpacity>
  );

  render() {
    const { recipes } = this.props || [];
    return (
      <ScrollView>
        <FlatList
          data={recipes}
          renderItem={this.renderItem}
          style={styles.recipescontainer}
        />
      </ScrollView>
    );
  }
}

export default RecipePresentational;
