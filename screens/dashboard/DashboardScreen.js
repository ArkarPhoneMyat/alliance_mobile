import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';

const DashboardScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Dashboard" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Dashboard Screen</Text>
        <Text>Coming Soon</Text>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
