import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import {COLORS, FONTS, Icon, Images, SIZES} from '../../constants';

const {width, height} = Dimensions.get('screen');
// console.log('width>>>', width);
// console.log('height>>>', height);

const UserProfileScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Profile" />
      <View style={styles.container}>
        <View style={styles.upContainer} />
        <View style={styles.botContainer}>
          <View style={styles.botContainerMain}>
            <Image
              source={Images.userProfile}
              style={styles.profileImage}
              borderRadius={50}
            />
            <View
              style={{
                width: width / 1.1,
                height: height / 3.5,
                backgroundColor: COLORS.secondaryBlue,
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '15%',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  fontSize: SIZES.h4,
                  color: COLORS.white,
                  fontWeight: 'bold',
                }}>
                Kevin Hardware
              </Text>
              <Text style={{fontSize: SIZES.body6, color: COLORS.white}}>
                A-000001
              </Text>
              <View
                style={{
                  width: '90%',
                  height: '60%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  marginTop: '3%',
                }}>
                <View style={styles.departmentRoot}>
                  <View style={styles.department1}>
                    <Text style={styles.text}>Department</Text>
                  </View>
                  <View style={styles.department2}>
                    <Text style={styles.text}>-</Text>
                  </View>
                  <View style={styles.department1}>
                    <Text style={styles.text}>Branch Manager</Text>
                  </View>
                </View>
                <View style={styles.departmentRoot}>
                  <View style={styles.department1}>
                    <Text style={styles.text}>Branch</Text>
                  </View>
                  <View style={styles.department2}>
                    <Text style={styles.text}>-</Text>
                  </View>
                  <View style={styles.department1}>
                    <Text style={styles.text}>Mandalay (AMTZ)</Text>
                  </View>
                </View>
                <View style={styles.departmentRoot}>
                  <View style={styles.department1}>
                    <Text style={styles.text}>Level</Text>
                  </View>
                  <View style={styles.department2}>
                    <Text style={styles.text}>-</Text>
                  </View>
                  <View style={styles.department1}>
                    <Text style={styles.text}>5 (C)</Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                width: width - 15,
                height: 320,
                marginTop: '5%',
              }}>
              <View style={styles.departmentRoot}>
                <View style={styles.department1}>
                  <Text style={styles.text1}>Gender</Text>
                </View>
                <View style={styles.department2}>
                  <Text style={styles.text1}>-</Text>
                </View>
                <View style={styles.department1}>
                  <Text style={styles.text1}>Male</Text>
                </View>
              </View>
              <View style={styles.departmentRoot}>
                <View style={styles.department1}>
                  <Text style={styles.text1}>Date of Birth</Text>
                </View>
                <View style={styles.department2}>
                  <Text style={styles.text1}>-</Text>
                </View>
                <View style={styles.department1}>
                  <Text style={styles.text1}>00/00/0000</Text>
                </View>
              </View>
              <View style={styles.departmentRoot}>
                <View style={styles.department1}>
                  <Text style={styles.text1}>NRC</Text>
                </View>
                <View style={styles.department2}>
                  <Text style={styles.text1}>-</Text>
                </View>
                <View style={styles.department1}>
                  <Text style={styles.text1}>9/XXXXXX(N)000000</Text>
                </View>
              </View>
              <View style={styles.departmentRoot}>
                <View style={styles.department1}>
                  <Text style={styles.text1}>Bank Account</Text>
                </View>
                <View style={styles.department2}>
                  <Text style={styles.text1}>-</Text>
                </View>
                <View style={styles.department1}>
                  <Text style={styles.text1}>0000000000000</Text>
                </View>
              </View>
              <View style={styles.departmentRoot}>
                <View style={styles.department1}>
                  <Text style={styles.text1}>Employed Date</Text>
                </View>
                <View style={styles.department2}>
                  <Text style={styles.text1}>-</Text>
                </View>
                <View style={styles.department1}>
                  <Text style={styles.text1}>20/08/2020</Text>
                </View>
              </View>
              <View style={styles.departmentRoot}>
                <View style={styles.department1}>
                  <Text style={styles.text1}>Last Promotion Date</Text>
                </View>
                <View style={styles.department2}>
                  <Text style={styles.tex1t}>-</Text>
                </View>
                <View style={styles.department1}>
                  <Text style={styles.text1}>16-05-2021</Text>
                </View>
              </View>
              <View style={styles.departmentRoot}>
                <View style={styles.department1}>
                  <Text style={styles.text1}>Service Year</Text>
                </View>
                <View style={styles.department2}>
                  <Text style={styles.tex1t}>-</Text>
                </View>
                <View style={styles.department1}>
                  <Text style={styles.text1}>2 Years</Text>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: COLORS.primary,
                  marginTop: 10,
                }}
              />
              <View style={[styles.departmentRoot, {marginTop: 10}]}>
                <View style={styles.department1}>
                  <Text style={styles.text1}>Child Count</Text>
                </View>
                <View style={styles.department2}>
                  <Text style={styles.text1}>-</Text>
                </View>
                <View style={styles.department1}>
                  <Text style={styles.text1}>0</Text>
                </View>
              </View>
              <View style={styles.departmentRoot}>
                <View style={styles.department1}>
                  <Text style={styles.text1}>Parent Count</Text>
                </View>
                <View style={styles.department2}>
                  <Text style={styles.tex1t}>-</Text>
                </View>
                <View style={styles.department1}>
                  <Text style={styles.text1}>2</Text>
                </View>
              </View>
              <View style={styles.departmentRoot}>
                <View style={styles.department1}>
                  <Text style={styles.text1}>Martial Status</Text>
                </View>
                <View style={styles.department2}>
                  <Text style={styles.tex1t}>-</Text>
                </View>
                <View style={styles.department1}>
                  <Text style={styles.text1}>Martial Status</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                width: 170,
                height: 50,
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 5,
                backgroundColor: COLORS.secondaryBlue,
              }}>
              <View
                style={{
                  width: '25%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Icon.document}
                  style={{width: 30, height: 40, tintColor: COLORS.white}}
                />
              </View>
              <View
                style={{
                  width: '75%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: COLORS.white, fontSize: SIZES.body4}}>
                  Fixed Asset List
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  upContainer: {
    width: width,
    height: '25%',
    backgroundColor: COLORS.primary,
  },
  botContainer: {
    width: width,
    height: '75%',
    backgroundColor: COLORS.white,
  },
  botContainerMain: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: '-40%',
  },
  profileImage: {
    width: 100,
    height: 100,
    marginBottom: -50,
    zIndex: 2,
  },
  departmentRoot: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 5,
  },
  department1: {
    width: '42.5%',
  },
  department2: {
    width: '5%',
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.body5,
  },
  text1: {
    color: COLORS.primary,
    fontSize: SIZES.body5,
  },
});
