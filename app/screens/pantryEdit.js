import React from 'react';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import { RkText, RkTextInput } from 'react-native-ui-kitten';
import LinearGradient from 'react-native-linear-gradient';
import { scaleVertical } from '../utils/scale';
import styles from '../assets/styles';

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
            textAlign={'center'}
            value={props.input}
            type="text"
            name="input"
            onChangeText={handleChange}
          />

          <LinearGradient
            colors={['#8a2387', '#e94057', '#f27121']}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              alignSelf: 'center',
              height: scaleVertical(45),
              marginVertical: 12,
              borderRadius: 35,
            }}
          >
            <TouchableOpacity onPress={addItem} style={{ width: 200 }}>
              <Text
                style={{
                  marginTop: 8,
                  fontSize: 25,
                  alignSelf: 'center',
                  color: 'white',
                  fontWeight: 'bold',
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
        renderItem={({ item }) => {
          return (
            <View>
              <RkText
                rkType="secondary2 hintColor"
                style={{ fontSize: 25, textAlign: 'center' }}
              >
                {item}
              </RkText>
              {editMode && (
                <TouchableOpacity onPress={() => deleted({ item: item })}>
                  <RkText
                    rkType="secondary2 hintColor"
                    style={{
                      fontSize: 25,
                      textAlign: 'center',
                      color: 'red',
                      fontWeight: 'bold',
                    }}
                  >
                    X
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
