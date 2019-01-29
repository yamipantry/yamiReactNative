import React from 'react'
import { View, Text } from 'react-native'
import { RkStyleSheet } from 'react-native-ui-kitten'


const SingleRecipe = (props) => {
    const {recipe} = props
    // const instructions = state.instructions
    const ingredients = recipe.ingredientsIncluded

    
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{recipe.name}</Text>
        </View>
    )
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
    heading: {
        size: 30
    }
  }));

export default SingleRecipe