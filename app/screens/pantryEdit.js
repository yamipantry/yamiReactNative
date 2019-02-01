import React from "react";
import { FlatList, View, TouchableOpacity, Button } from "react-native";
import { RkText, RkTextInput } from "react-native-ui-kitten";

const PantryEdit = props => {
  const { editMode, pantryItems, handleChange, addItem, deleted } = props;
  return (
    <View>
      {editMode && (
        <View>
          <RkTextInput
            value={props.input}
            type="text"
            name="input"
            onChangeText={handleChange}
          />
          
          {/* {this.state.suggestions.map(elem => {
            return <li key={elem.name}>{elem.name}</li>;
          })} */}
          <Button title="Add Item" onPress={addItem}/>
        </View>
      )}
      <FlatList
        data={pantryItems}
        renderItem={({ item }) => {
          return (
            <View>
              <RkText>{item}</RkText>
              {editMode && (
                <TouchableOpacity onPress={() => deleted({item: item})}>
                  <RkText>X</RkText>
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
