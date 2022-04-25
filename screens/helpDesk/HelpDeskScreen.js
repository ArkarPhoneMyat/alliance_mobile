import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';

const HelpDeskScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Help Desk" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Help Desk Screen</Text>
        <Text>Coming Soon</Text>
      </View>
    </View>
  );
};

export default HelpDeskScreen;

const styles = StyleSheet.create({});
