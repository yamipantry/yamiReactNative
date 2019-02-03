import React from "react";
import styles from "../assets/styles";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { RkText, RkCard, RkButton } from "react-native-ui-kitten";
import { webserver } from "../../helperfunction";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Rating } from "react-native-ratings";

const SingleRecipe = props => {
  const { pantry } = props;
  const { recipe } = props;
  const instructions = recipe.instructions;
  const ingredients = recipe.ingredientsIncluded;
  return (
    <ScrollView style={styles.root}>
      <RkCard rkType="article">
        <Image rkCardImg source={{ uri: `${webserver}${recipe.imageUrl}` }} />
        <View style={{ paddingBottom: 10 }}>
          <View rkCardHeader>
            <View>
              <RkText style={styles.headerSingleRecipe}>{recipe.name}</RkText>
              <RkText rkType="secondary2 hintColor" style={styles.text}>
                {recipe.description}
              </RkText>
            </View>
            <View>
              <RkButton
                onPress={() => {
                  props.navigation.navigate('BookmarksModal', {recipeId: props.recipe.id})
                }}
                rkType="small"
                style={{
                  position: "absolute",
                  right: 0,
                  top: 4,
                  height: 20,
                  width: 85,
                  backgroundColor: "lightblue"
                }}
              >
                Bookmark
              </RkButton>
            </View>
          </View>
          <View rkCardContent>
            <RkText style={styles.subheading}>Ingredients</RkText>
            <FlatList
              style={{ paddingBottom: 10 }}
              data={ingredients}
              renderItem={({ item }) => {
                if (pantry.includes(item.ingredientName)) {
                  return (
                    <RkText style={styles.text}>
                      &bull;&nbsp;&nbsp;
                      {item.amount} {item.ingredientName}
                    </RkText>
                  );
                } else {
                  return (
                    <RkText style={styles.text1}>
                      &bull;&nbsp;&nbsp;{item.amount} {item.ingredientName}{" "}
                      (needed)
                    </RkText>
                  );
                }
              }}
            />
            <RkText style={styles.subheading}>Instructions</RkText>
            <FlatList
              data={instructions}
              renderItem={({ item }) => (
                <RkText style={styles.text}>&bull;&nbsp;&nbsp;{item}</RkText>
              )}
            />

            <Rating showRating onFinishRating={props.star} />
            <TouchableOpacity
              onPress={() => {
                props.ranking();
                props.navigation.navigate("Recipes");
              }}
            >
              <Text>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RkCard>
    </ScrollView>
  );
};

export default SingleRecipe;
