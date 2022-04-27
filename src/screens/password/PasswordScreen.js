import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';

const PasswordScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Password Change" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Password Screen</Text>
        <Text>Coming Soon</Text>
      </View>
    </View>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({});
