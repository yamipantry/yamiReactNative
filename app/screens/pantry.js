import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Button
} from "react-native";
import { RkText } from "react-native-ui-kitten";
import { webserver } from "../../helperfunction";
import styles from "../assets/styles";

const Pantry = props => {
  const { pantryItems, profileImage } = props.user;
  const { editMode } = props
//   const editMode = this.state.editMode;
//   console.log(editMode);
  return (
    <View>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Profile")}
      >
        <Image
          source={{ uri: `${webserver}${profileImage}` }}
          style={styles.imageSingleRecipe}
        />
      </TouchableOpacity>
      <FlatList
        data={pantryItems}
        renderItem={({ item }) => {
          return (
            <View>
              <RkText>{item}</RkText>
                {!editMode &&
                <TouchableOpacity onPress={() => this.props.delete(item)}>
                  <RkText>X</RkText>
                </TouchableOpacity>
                }
            </View>
          );
        }}
      />
      <Button
        title="Edit Pantry"
        onPress={() => props.edit}
      />
    </View>
  );
};

export default Pantry;