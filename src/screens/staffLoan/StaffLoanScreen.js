import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';

const StaffLoanScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Staff Loan" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Staff Loan Screen</Text>
        <Text>Coming Soon</Text>
      </View>
    </View>
  );
};

export default StaffLoanScreen;

const styles = StyleSheet.create({});
