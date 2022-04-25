import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';

const IncentiveScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Incentive" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Incentive Screen</Text>
        <Text>Coming Soon</Text>
      </View>
    </View>
  );
};

export default IncentiveScreen;

const styles = StyleSheet.create({});
