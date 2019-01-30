import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { RkStyleSheet, RkText, RkButton } from "react-native-ui-kitten";
import { webserver } from "../../helperfunction";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Rating } from "react-native-ratings";

const SingleRecipe = props => {
  const { pantry } = props;
  const { recipe } = props;
  const instructions = recipe.instructions;
  const ingredients = recipe.ingredientsIncluded;
  return (
    <ScrollView
    scrollEnabled={true}>
    <View style={styles.container}>
      <Text style={styles.heading}>{recipe.name}</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Recipes")}>
        <Image
          style={styles.image}
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
          props.ranking()
          props.navigation.navigate("Recipes")}
        }
        >
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = RkStyleSheet.create(theme => ({
  container: {
    flex: 1
  },
  card: {
    marginVertical: 8
  },
  post: {
    marginTop: 13
  },
  heading: {
    fontSize: 40
  },
  image: {
    width: 270,
    height: 220,
    justifyContent: "center"
  },
  subheading: {
    fontSize: 25
  },
  text: {
    fontSize: 20
  },
  text1: {
    fontSize: 20,
    color: "red"
  }
}));

export default SingleRecipe;
