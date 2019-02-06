import React from 'react'
import { ScrollView, View, TouchableOpacity, FlatList, Image } from 'react-native'
import { RkText, RkCard} from 'react-native-ui-kitten'
import styles from '../assets/styles'
import { webserver } from '../../helperfunction'

export default class Bookmarks extends React.Component {
    constructor() {
        super()
    }

    renderItem = ({ item }) => (
        <TouchableOpacity
          delayPressIn={20}
          activeOpacity={0.8}
          onPress={() => {
              this.props.navigation.navigate('SingleRecipe', {id: item.recipe.id, bookmarks: true})
          }
          }
        >
          <RkCard rkType="horizontal" style={styles.recipescard}>
            <Image rkCardImg style={styles.recipeImage} source={{ uri: `${webserver}${item.recipe.imageUrl}` }} />
            <View rkCardContent>
              <RkText
                rkType="secondary6 hintColor"
                style={{ textAlign: 'center', fontSize: 30 }}
              >
                {item.recipe.name}
              </RkText>
            </View>
          </RkCard>
        </TouchableOpacity>
      )

      render() {
        const { bookmarks } = this.props || [];
        return (
          <ScrollView>
            <FlatList
              data={bookmarks}
              renderItem={this.renderItem}
              style={styles.recipescontainer}
              keyExtractor={(item, idx) => `${idx}`} //looking for different key other than idx
            />
          </ScrollView>
        );
      }
}
