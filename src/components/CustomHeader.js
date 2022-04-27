import React, {useContext} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {COLORS, FONTS, Icon, SIZES} from '../constants/index';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({isMain = false, title}) => {
  const navigation = useNavigation();
  const OnMenuClick = () => {
    if (!isMain) {
      navigation.navigate('home');
    } else {
      navigation.openDrawer();
    }
  };

  return (
    <View
      style={{
        height: 50,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: COLORS.primary,
      }}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}
          onPress={OnMenuClick}>
          <Image
            source={isMain ? Icon.menu : Icon.back}
            resizeMode="contain"
            style={{
              width: isMain ? 25 : 30,
              height: isMain ? 25 : 30,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>

        <View style={{flex: 2}}>
          <Text
            style={{
              fontSize: SIZES.h3,
              color: COLORS.white,
              marginLeft: title == 'Profile' ? '30%' : null,
            }}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;
