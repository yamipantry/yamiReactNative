import React from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
  Keyboard,
} from 'react-native';
import { RkText, RkButton } from 'react-native-ui-kitten';
import LinearGradient from 'react-native-linear-gradient';
import { scaleVertical } from '../utils/scale';
import styles from '../assets/styles';
import AutoComplete from 'react-native-autocomplete-input';
import { webserver } from '../../helperfunction';
// import { ScrollView } from 'react-native-gesture-handler';

const PantryEdit = props => {
  const {
    editMode,
    pantryItems,
    handleChange,
    addItem,
    deleted,
    suggestions,
  } = props;
  return (
    <View>
      {editMode && (
        <View style={styles.addContainer}>
          <AutoComplete
            keyboardShouldPersistTaps="always"
            data={suggestions}
            defaultValue={props.input}
            textAlign={'center'}
            fontSize={16}
            listContainerStyle={{
              width: 200,
              marginLeft: 20,
            }}
            inputContainerStyle={{
              width: 200,
              marginLeft: 20,
              //borderWidth: 3,
              //borderColor: 'black',
              //borderRadius: 10,
            }}
            listStyle={{ marginLeft: 0, width: 200, height: 'auto' }}
            onChangeText={text => handleChange(text)}
            renderItem={item => (
              <TouchableOpacity
                onResponderRelease={() => Keyboard.dismiss()}
                onPress={() => {
                  handleChange(item.name);
                }}
              >
                <Text style={{ fontSize: 16, textAlign: 'center' }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
          {/* <FlatList
            data={suggestions}
            renderItem={({ item, idx }) => {
              return (
                <TouchableOpacity
                  key={idx}
                  onPress={() => (props.input = item.name)}
                >
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => `${item.ingredientName}`}
          /> */}

          <RkButton
            rkType="outline small"
            style={{ width: 45, marginRight: 5 }}
            onPress={addItem}
          >
            Add
          </RkButton>
        </View>
      )}
      <ScrollView style={{ paddingTop: 10 }}>
        <FlatList
          numColumns={3}
          data={pantryItems}
          style={{ alignSelf: 'center', paddingBottom: 70 }}
          renderItem={({ item }) => {
            return (
              <View>
                <ImageBackground
                  source={{
                    uri: `${webserver}/Petrol.jpg`,
                  }}
                  style={{
                    width: 108,
                    height: 108,
                    margin: 5,
                  }}
                  imageStyle={{ opacity: 0.9, borderRadius: 25 }}
                >
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        alignSelf: 'center',
                        color: 'white',
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                  {editMode && (
                    <RkButton
                      onPress={() => deleted(item)}
                      rkType="small danger"
                      style={{
                        width: 20,
                        height: 20,
                        display: 'flex',
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                      }}
                    >
                      X
                    </RkButton>
                  )}
                </ImageBackground>
              </View>
            );
          }}
          keyExtractor={(item, idx) => `${idx}`}
        />
      </ScrollView>
    </View>
  );
};

export default PantryEdit;
