import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';

const StaffDirectoryScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Staff Directory" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>StaffDirectory Screen</Text>
        <Text>Coming Soon</Text>
      </View>
    </View>
  );
};

export default StaffDirectoryScreen;

const styles = StyleSheet.create({});
