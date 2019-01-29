import React from "react";
import { View, Text, Image } from "react-native";
import { RkStyleSheet, RkText } from "react-native-ui-kitten";
import { webserver } from "../../helperfunction";
import { FlatList } from "react-native-gesture-handler";

const SingleRecipe = props => {
  const { pantry } = props
  const { recipe } = props;
  const instructions = recipe.instructions;
  const ingredients = recipe.ingredientsIncluded;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{recipe.name}</Text>
      <Image
        style={styles.image}
        source={{ uri: `${webserver}${recipe.imageUrl}` }}
      />
      <RkText style={styles.text}>{recipe.description}</RkText>
      <Text> </Text>
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
            if(pantry.includes(item.ingredientName)){
                return (
                <RkText style={styles.text}>-- {item.amount}  {item.ingredientName}</RkText>
                )
            }else {
                return (
                <RkText style={styles.text1}>-- {item.amount} {item.ingredientName} (needed)</RkText>
                )
            }
        }
        }
      />
    </View>
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
    width: 300,
    height: 240,
    justifyContent: 'center'
  },
  subheading: {
    fontSize: 25
  },
  text: {
    fontSize: 20
  },
  text1: {
      fontSize: 20, 
      color: 'red'
  }
}));

export default SingleRecipe;
