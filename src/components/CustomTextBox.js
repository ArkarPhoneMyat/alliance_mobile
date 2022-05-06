import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';

const CustomTextBox = ({value, onValueChange, title, star, disable}) => {
  return (
    <View
      style={{
        width: '90%',
        height: 80,
        alignSelf: 'center',
      }}>
      <Text style={{fontSize: SIZES.body4, color: COLORS.black}}>
        {title}
        {star ? (
          <Text style={{fontSize: SIZES.body4, color: COLORS.buttonRed}}>
            *
          </Text>
        ) : null}
      </Text>
      <View>
        <TextInput
          style={{
            height: 50,
            backgroundColor: COLORS.lightGray1,
            padding: 10,
          }}
          value={value}
          onChangeText={onValueChange}
          editable={disable == null ? null : disable}
        />
      </View>
    </View>
  );
};

export default CustomTextBox;

const styles = StyleSheet.create({});
