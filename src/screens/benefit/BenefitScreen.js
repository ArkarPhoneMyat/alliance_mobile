import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';

const BenefitScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Benefit" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Benefit Screen</Text>
        <Text>Coming Soon</Text>
      </View>
    </View>
  );
};

export default BenefitScreen;

const styles = StyleSheet.create({});
