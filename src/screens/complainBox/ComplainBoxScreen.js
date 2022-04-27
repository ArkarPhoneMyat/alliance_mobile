import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';

const ComplainBoxScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Complain Box" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Complain Box Screen</Text>
        <Text>Coming Soon</Text>
      </View>
    </View>
  );
};

export default ComplainBoxScreen;

const styles = StyleSheet.create({});
