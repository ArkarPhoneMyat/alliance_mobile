import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {COLORS, Icon} from '../constants';
import moment from 'moment';

export const CustomDatePicker = ({
  date,
  setDate,
  dateTitle,
  maxDate,
  minDate,
  open,
  setOpen,
}) => {
  var tempDate = moment(date).format('DD-MM-YYYY');
  return (
    <TouchableOpacity
      style={{width: '48%', height: 50}}
      onPress={() => setOpen(true)}>
      {dateTitle == '' ? null : (
        <Text
          style={{
            marginLeft: 5,
            color: COLORS.black,
            fontSize: 14,
          }}>
          {dateTitle}
        </Text>
      )}
      <View
        style={{
          width: '100%',
          height: 30,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={Icon.calendar}
            style={{width: 30, height: 30, tintColor: COLORS.primary}}
          />
        </View>
        <View
          style={{
            width: '80%',
            borderWidth: 0.5,
            borderColor: COLORS.darkgray,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{tempDate}</Text>
        </View>
      </View>
      <DatePicker
        date={date}
        open={open}
        modal
        mode="date"
        minimumDate={minDate}
        maximumDate={maxDate}
        confirmText="Confirm"
        cancelText="Cancel"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      {/* <DatePicker
        style={{width: '100%'}}
        date={date}
        mode="date"
        format="DD-MM-YYYY"
        minDate={minDate}
        maxDate={maxDate}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={date => {
          this.setState({date: date});
        }}
      /> */}
    </TouchableOpacity>
  );
};
