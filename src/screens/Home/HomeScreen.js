import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  BackHandler,
} from 'react-native';
import React, {useEffect} from 'react';
import CustomHeader from '../../components/CustomHeader';
import {COLORS, Icon} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <CustomHeader isMain={true} title="Alliance HRM" />
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('dashboard')}>
          <Image source={Icon.dashboard} style={styles.icon} />
          <Text style={styles.text}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('userProfile')}>
          <Image source={Icon.userProfile} style={styles.icon} />
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('attendance')}>
          <Image source={Icon.attendance} style={styles.icon} />
          <Text style={styles.text}>Attendance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('leave')}>
          <Image source={Icon.leave} style={styles.icon} />
          <Text style={styles.text}>Leave</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('benefit')}>
          <Image source={Icon.benefit} style={styles.icon} />
          <Text style={styles.text}>Benefit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('allowance')}>
          <Image source={Icon.allowance} style={styles.icon} />
          <Text style={styles.text}>Allowance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('helpDesk')}>
          <Image source={Icon.helpDesk} style={styles.icon} />
          <Text style={styles.text}>Help Desk</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('payroll')}>
          <Image source={Icon.payroll} style={styles.icon} />
          <Text style={styles.text}>Payroll</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('incentive')}>
          <Image source={Icon.incentive} style={styles.icon} />
          <Text style={styles.text}>Incentive</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('complainBox')}>
          <Image source={Icon.complainBox} style={styles.icon} />
          <Text style={styles.text}>Complain Box</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('password')}>
          <Image source={Icon.password} style={styles.icon} />
          <Text style={styles.text}>Password Change</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('staffDirectory')}>
          <Image source={Icon.staffDirectory} style={styles.icon} />
          <Text style={styles.text}>Staff Directory</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    width: width / 3.5,
    height: height / 7,
    borderRadius: 10,
    shadowColor: COLORS.primary,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    tintColor: COLORS.primary,
  },
  text: {
    fontSize: 13,
    color: COLORS.primary,
  },
});
