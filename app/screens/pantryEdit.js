import React from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  ImageBackground
} from "react-native";
import { RkText, RkTextInput } from "react-native-ui-kitten";
import LinearGradient from "react-native-linear-gradient";
import { scaleVertical } from "../utils/scale";
import styles from "../assets/styles";

const PantryEdit = props => {
  const { editMode, pantryItems, handleChange, addItem, deleted } = props;
  const mapped = () => {
    props.suggestions.map(elem => {
      return (
        <Text id="key" key={elem.name}>
          {elem.name}
        </Text>
      );
    });
  };
  return (
    <View>
      {editMode && (
        <View>
          <RkTextInput
            render={() => mapped()}
            rkType="rounded"
            textAlign={"center"}
            value={props.input}
            type="text"
            name="input"
            onChangeText={handleChange}
          />

          <LinearGradient
            colors={["#8a2387", "#e94057", "#f27121"]}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              alignSelf: "center",
              height: scaleVertical(45),
              marginVertical: 12,
              borderRadius: 35
            }}
          >
            <TouchableOpacity onPress={addItem} style={{ width: 200 }}>
              <Text
                style={{
                  marginTop: 8,
                  fontSize: 25,
                  alignSelf: "center",
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                Add
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}
      <FlatList
        data={pantryItems}
        style={{alignSelf: 'center'}}
        renderItem={({ item }) => {
          
          return (
            <View>
                <ImageBackground
                  source={{
                    uri:
                      "https://cdn1.medicalnewstoday.com/content/images/articles/270/270678/celery.jpg"
                  }}
                  style={{ width: 250, height: 40 }}
                  imageStyle={{ opacity: 0.7, borderRadius: 25 }}
                >
                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        alignSelf: "center",
                        color: "white"
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                </ImageBackground>
              {editMode && (
                <TouchableOpacity onPress={() => deleted(item)}>
                  <RkText
                    rkType="secondary2 hintColor"
                    style={{
                      fontSize: 25,
                      textAlign: "center",
                      color: "red",
                      fontWeight: "bold"
                    }}
                  >
                    DELETE
                  </RkText>
                </TouchableOpacity>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default PantryEdit;
