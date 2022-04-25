import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';

const UserProfileScreen = () => {
  return (
    <View style={{flex: 1}}>
      <CustomHeader title="Profile" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>User Profile Screen</Text>
        <Text>Coming Soon</Text>
      </View>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({});
