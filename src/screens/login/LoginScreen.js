import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  BackHandler,
  ImageBackground,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, Icon, Images, SIZES} from '../../constants';

const {width, height} = Dimensions.get('screen');
const version = require('../../../package.json');
const LoginScreen = props => {
  //   useEffect(() => {
  //     const backAction = () => {
  //       Alert.alert('Hold on!', 'Are you sure you want to go back?', [
  //         {
  //           text: 'Cancel',
  //           onPress: () => null,
  //           style: 'cancel',
  //         },
  //         {text: 'YES', onPress: () => BackHandler.exitApp()},
  //       ]);
  //       return true;
  //     };

  //     const backHandler = BackHandler.addEventListener(
  //       'hardwareBackPress',
  //       backAction,
  //     );

  //     return () => backHandler.remove();
  //   }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: COLORS.white,
      }}>
      <View style={styles.logo}>
        <Image source={Images.loginLogo} style={styles.loginLogo} />
      </View>
      <View style={styles.main}>
        <View style={styles.main1}>
          <View
            style={{
              width: '100%',
              height: '80%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.textBox}>
              <View style={{width: '25%', marginRight: '-28%'}}>
                <Image source={Icon.username} style={styles.icon} />
              </View>

              <TextInput
                style={styles.input}
                placeholder="Username"
                textAlign="center"
              />
            </View>
            <View style={[styles.textBox, {marginTop: 10}]}>
              <View style={{width: '25%', marginRight: '-28%'}}>
                <Image source={Icon.secure} style={styles.icon} />
              </View>

              <TextInput
                style={styles.input}
                placeholder="Password"
                textAlign="center"
              />
            </View>
            <TouchableOpacity
              style={styles.logoButton}
              onPress={() => props.navigation.navigate('Home')}>
              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: SIZES.h4, color: COLORS.white}}>
                  Login
                </Text>
              </View>
              <View
                style={{
                  width: '10%',
                  marginLeft: '-15%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={Icon.next} style={{width: 20, height: 35}} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{color: COLORS.primary, marginTop: 20}}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              height: '20%',
              justifyContent: 'center',
              marginTop: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: SIZES.h5,
                color: COLORS.lightGray2,
              }}>
              HRMS
            </Text>
            <Text style={{fontSize: SIZES.body6}}>
              Version {version.version}
            </Text>
          </View>
        </View>
      </View>
      <Image source={Images.loginBg} style={styles.bg} />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: width,
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginLogo: {
    width: width / 1.5,
    height: height / 8,
    zIndex: 3,
  },
  main: {
    width: width + 20,
    height: '60%',
    transform: [{rotate: '-25deg'}],
    zIndex: 2,
    marginBottom: -100,
    borderRadius: 50,
    backgroundColor: COLORS.white,
  },
  main1: {
    transform: [{rotate: '25deg'}],
    width: width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    width: width,
    height: '35%',
    zIndex: 1,
  },
  textBox: {
    width: width / 1.7,
    height: height / 14,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: COLORS.primary,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
  },
  icon: {
    width: 50,
    height: 50,
    tintColor: COLORS.darkgray,
  },
  input: {
    width: '100%',
    height: 45,
  },
  logoButton: {
    width: width / 1.7,
    height: height / 13,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    shadowColor: COLORS.primary,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
  },
});
