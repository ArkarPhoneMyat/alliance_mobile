import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';

const AttendanceScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Attendance" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Attendance Screen</Text>
        <Text>Coming Soon</Text>
      </View>
    </View>
  );
};

export default AttendanceScreen;

const styles = StyleSheet.create({});
