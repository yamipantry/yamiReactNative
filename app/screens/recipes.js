// import React from "react";
// import { View, Text } from "react-native";

// const RecipePresentational = props => {
//   const recipes = props.recipes;
//   return (
//     <View>
//       {recipes.map(recipe => {
//         const ingList = recipe.ingredientsIncluded || [];
//         return (
//           <View key={recipe.id}>
//             <Text key={recipe.id}>{recipe.name}</Text>
//             {/* <Image source={require(recipe.imageUrl)} style={{ width: 100, height: 100 }} /> */}
//             <View>
//               {ingList.map((ing, idx) => {
//                 return <Text key={idx}>{ing.ingredientName}</Text>;
//               })}
//             </View>
//           </View>
//         );
//       })}
//     </View>
//   );
// };


import React from 'react';
import { webserver } from '../../helperfunction'
import {
  FlatList,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  RkText,
  RkCard,
  RkStyleSheet,
} from 'react-native-ui-kitten';

export class RecipePresentational extends React.Component {
  static navigationOptions = {
    title: 'Recipes'.toUpperCase(),
  };

  extractItemKey = (item) => `${item.id}`;

  renderItem = ({ item }) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.props.navigation.navigate('SingleRecipe', { id: item.id })}>
      <RkCard rkType='horizontal' style={styles.card}>
        <Image rkCardImg source={{uri: `${webserver}${item.imageUrl}`}} />
        <View rkCardContent>
          <RkText rkType='secondary6 hintColor'>
            {`${item.name}`}
          </RkText>
        </View>
      </RkCard>
    </TouchableOpacity>
  );

  render() {
    const {recipes} = this.props || []
    console.log('hello', recipes)
    return(
    <View>
      <FlatList
        data={recipes}
        renderItem={this.renderItem}
        keyExtractor={this.extractItemKey}
        style={styles.container}
      />
    </View>
  );
}
}


const styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  card: {
    marginVertical: 8,
  },
  post: {
    marginTop: 13,
  },
}));


export default RecipePresentational;


