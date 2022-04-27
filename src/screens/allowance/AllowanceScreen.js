import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';

const AllowanceScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Allowance" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Allowance Screen</Text>
        <Text>Coming Soon</Text>
      </View>
    </View>
  );
};

export default AllowanceScreen;

const styles = StyleSheet.create({});
