import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {COLORS, SIZES} from '../constants';

const CustomDropDown = ({value, onValueChange, title, data, star}) => {
  return (
    <View
      style={{
        width: '90%',
        height: 80,
        alignSelf: 'center',
        marginTop: 5,
      }}>
      <Text style={{fontSize: SIZES.body4, color: COLORS.black}}>
        {title}
        {star ? (
          <Text style={{fontSize: SIZES.body4, color: COLORS.buttonRed}}>
            *
          </Text>
        ) : null}
      </Text>

      <Picker
        selectedValue={value}
        style={{
          width: '100%',
          backgroundColor: COLORS.lightGray1,
        }}
        onValueChange={onValueChange}>
        <Picker.Item label="Please Select " value="0" />
        {data &&
          data.map((v, i) => (
            <Picker.Item label={v.label} value={v.value} key={i} />
          ))}
      </Picker>
    </View>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({});
