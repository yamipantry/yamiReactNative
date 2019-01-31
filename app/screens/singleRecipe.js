import React from 'react';
import styles from '../assets/styles';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import { webserver } from '../../helperfunction';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Rating } from 'react-native-ratings';

const SingleRecipe = props => {
  const { pantry } = props;
  const { recipe } = props;
  const instructions = recipe.instructions;
  const ingredients = recipe.ingredientsIncluded;
  return (
    <ScrollView scrollEnabled={true}>
      <View style={styles.containerSingleRecipe}>
        <Text style={styles.headerSingleRecipe}>{recipe.name}</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Recipes')}>
          <Image
            style={styles.imageSingleRecipe}
            source={{ uri: `${webserver}${recipe.imageUrl}` }}
          />
        </TouchableOpacity>

        <RkText style={styles.text}>{recipe.description}</RkText>
        <Text> </Text>
        <RkText style={styles.subheading}>Detaiiled Instructions</RkText>
        <FlatList
          data={instructions}
          renderItem={({ item }) => (
            <RkText style={styles.text}>-- {item}</RkText>
          )}
        />
        <Text> </Text>
        <RkText style={styles.subheading}>Ingredients</RkText>
        <FlatList
          data={ingredients}
          renderItem={({ item }) => {
            if (pantry.includes(item.ingredientName)) {
              return (
                <RkText style={styles.text}>
                  -- {item.amount} {item.ingredientName}
                </RkText>
              );
            } else {
              return (
                <RkText style={styles.text1}>
                  -- {item.amount} {item.ingredientName} (needed)
                </RkText>
              );
            }
          }}
        />
        <Rating showRating onFinishRating={props.star} />
        <TouchableOpacity
          onPress={() => {
            props.ranking();
            props.navigation.navigate('Recipes');
          }}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SingleRecipe;
