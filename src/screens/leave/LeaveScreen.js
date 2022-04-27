import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';

const LeaveScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Leave" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Leave Screen</Text>
        <Text>Coming Soon</Text>
      </View>
    </View>
  );
};

export default LeaveScreen;

const styles = StyleSheet.create({});
