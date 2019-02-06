import React from "react";
import styles from "../assets/styles";
import { View, Text, Image, TouchableOpacity, Alert, ScrollView, FlatList } from "react-native";
import { RkText, RkCard, RkButton } from "react-native-ui-kitten";
import { webserver } from "../../helperfunction";
import { Rating } from "react-native-ratings";

const SingleRecipe = props => {
  const { pantry } = props;
  const { recipe } = props;
  const instructions = recipe.instructions;
  const ingredients = recipe.ingredientsIncluded;
  const bookmarkPage = props.navigation.getParam("bookmarks", false);
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
                    props.navigation.navigate("YamiDinners", {
                      recipeName: props.recipe.name,
                      description: props.recipe.description
                    });
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
                  Add Dinner
                </RkButton>
              </View>
              {!bookmarkPage && (
                <View>
                  <RkButton
                    onPress={() => {
                      props.navigation.navigate("BookmarksModal", {
                        recipeId: props.recipe.id
                      });
                    }}
                    rkType="small"
                    style={{
                      position: "absolute",
                      right: 0,
                      top: 34,
                      height: 20,
                      width: 85,
                      backgroundColor: "lightblue"
                    }}
                  >
                    Bookmark
                  </RkButton>
                </View>
              )}
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
                keyExtractor={item => `${item.ingredientName}`}
              />
              <RkText style={styles.subheading}>Instructions</RkText>
              <FlatList
                data={instructions}
                renderItem={({ item }) => (
                  <RkText style={styles.text}>&bull;&nbsp;&nbsp;{item}</RkText>
                )}
                keyExtractor={(item, idx) => `${idx}`}
              />
              {bookmarkPage && (
                <View>
                  <Rating
                    showRating
                    onFinishRating={props.star}
                    imageSize={20}
                  />
                  <TouchableOpacity
                    style={{
                      alignSelf: "center",
                      backgroundColor: "lightblue",
                      width: 150,
                      borderRadius: 25,
                      height: 20,
                      marginTop: 15
                    }}
                    onPress={() => {
                      props.ranking();
                      props.navigation.navigate("Bookmarks");
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        textAlignVertical: "center"
                      }}
                    >
                      Rate Your Creation
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </RkCard>
    </ScrollView>
  );
};

export default SingleRecipe;
