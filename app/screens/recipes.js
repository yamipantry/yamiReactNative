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
// import { SocialBar } from '../../components';
// import { data } from '../../data';
// import NavigationType from '../../config/navigation/propTypes';


export class RecipePresentational extends React.Component {
  // static propTypes = {
  //   navigation: NavigationType.isRequired,
  // };
  static navigationOptions = {
    title: 'Recipes'.toUpperCase(),
  };

  // state = {
  //   data: data.getArticles(),
  // };

  extractItemKey = (item) => `${item.id}`;

  renderItem = ({ item }) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.props.navigation.navigate('Recipe', { id: item.id })}>
      <RkCard rkType='horizontal' style={styles.card}>
        {/* <Image source={require('blowfish.jpeg')} /> */}
        <View rkCardContent>
          {/* <RkText numberOfLines={1} rkType='header6'>{item.header}</RkText> */}
          <RkText rkType='secondary6 hintColor'>
            {`${item.name}`}
          </RkText>
          {/* <RkText style={styles.post} numberOfLines={2} rkType='secondary1'>{item.text}</RkText> */}
        </View>
        {/* <View rkCardFooter>
          <SocialBar rkType='space' showLabel />
        </View > */}
      </RkCard>
    </TouchableOpacity>
  );

  render() {
    const {recipes} = this.props || []
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



