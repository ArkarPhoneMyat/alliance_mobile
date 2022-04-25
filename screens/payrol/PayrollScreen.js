import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';

const PayrollScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Payroll" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Payroll Screen</Text>
        <Text>Coming Soon</Text>
      </View>
    </View>
  );
};

export default PayrollScreen;

const styles = StyleSheet.create({});
