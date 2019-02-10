import React from 'react';
import styles from '../assets/styles';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import { RkText, RkCard } from 'react-native-ui-kitten';
import { webserver } from '../../helperfunction';
import { Rating } from 'react-native-ratings';

const SingleRecipe = props => {
  const { pantry } = props;
  const { recipe } = props;
  const instructions = recipe.instructions;
  const ingredients = recipe.ingredientsIncluded;
  const bookmarkPage = props.navigation.getParam('bookmarks', false);
  return (
    <View>
      <RkCard rkType="article">
        <ScrollView style={styles.root}>
          <ImageBackground
            rkCardImg
            source={{ uri: `${webserver}${recipe.imageUrl}` }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                width: '100%',
                position: 'absolute',
                bottom: 0,
                backgroundColor: 'rgba(255,255,255, 0.3);',
              }}
            >
              {!bookmarkPage && (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('BookmarksModal', {
                      recipeId: props.recipe.id,
                    });
                  }}
                >
                  <Image
                    style={{
                      height: 29,
                      width: 29,
                      margin: 5,
                    }}
                    source={require('../assets/images/bookmark.png')}
                  />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('YamiDinners', {
                    recipeName: props.recipe.name,
                    description: props.recipe.description,
                  });
                }}
              >
                <Image
                  style={{ height: 29, width: 29, margin: 5, marginRight: 15 }}
                  source={require('../assets/images/dinner.png')}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={{ paddingBottom: 1 }}>
            <View rkCardHeader>
              <View>
                <RkText style={styles.headerSingleRecipe}>{recipe.name}</RkText>
                <RkText style={styles.text}>{recipe.description}</RkText>
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
                        &bull;&nbsp;&nbsp;{item.amount} {item.ingredientName}{' '}
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
                      alignSelf: 'center',
                      backgroundColor: 'lightblue',
                      width: 150,
                      borderRadius: 25,
                      height: 20,
                      marginTop: 15,
                    }}
                    onPress={() => {
                      props.ranking();
                      props.navigation.navigate('Bookmarks');
                    }}
                  >
                    <Text
                      style={{
                        textAlign: 'center',
                        textAlignVertical: 'center',
                      }}
                    >
                      Rate Your Creation
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity />
      </RkCard>
    </View>
  );
};

export default SingleRecipe;
