import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import UserProfileScreen from '../screens/UserProfile/UserProfileScreen';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {Icon, COLORS, SIZES, FONTS} from '../constants';
import DashboardScreen from './../screens/dashboard/DashboardScreen';
import AttendanceScreen from './../screens/attendance/AttendanceScreen';
import LeaveScreen from './../screens/leave/LeaveScreen';
import BenefitScreen from './../screens/benefit/BenefitScreen';
import AllowanceScreen from './../screens/allowance/AllowanceScreen';
import HelpDeskScreen from './../screens/helpDesk/HelpDeskScreen';
import PayrollScreen from '../screens/payroll/PayrollScreen';
import IncentiveScreen from './../screens/incentive/IncentiveScreen';
import ComplainBoxScreen from './../screens/complainBox/ComplainBoxScreen';
import PasswordScreen from './../screens/password/PasswordScreen';
import StaffDirectoryScreen from './../screens/staffDirectory/StaffDirectoryScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          height: 100,
          backgroundColor: COLORS.lightGray3,
        }}>
        <View
          style={{
            width: '30%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 70, height: 70, tintColor: COLORS.primary}}
            source={Icon.userProfile}
          />
        </View>
        <View
          style={{
            width: '0.5%',
            height: 80,
            backgroundColor: COLORS.primary,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            width: '69.5%',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <View style={styles.profileContainer}>
            <Text style={styles.profileText}>Kevin Hardware</Text>
          </View>
          <View style={styles.profileContainer}>
            <Text style={styles.profileText}>Branch Manager</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: SIZES.height - 100,
        }}>
        <TouchableOpacity
          style={[styles.button, {marginTop: 10}]}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate('home');
          }}>
          <Image source={Icon.home} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            height: 0.5,
            backgroundColor: COLORS.lightGray3,
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate('dashboard');
          }}>
          <Image source={Icon.dashboard} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Dashboard</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            height: 0.5,
            backgroundColor: COLORS.lightGray3,
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate('userProfile');
          }}>
          <Image source={Icon.userProfile} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            height: 0.5,
            backgroundColor: COLORS.lightGray3,
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate('attendance');
          }}>
          <Image source={Icon.attendance} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Attendance</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            height: 0.5,
            backgroundColor: COLORS.lightGray3,
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate('leave');
          }}>
          <Image source={Icon.leave} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Leave</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            height: 0.5,
            backgroundColor: COLORS.lightGray3,
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate('benefit');
          }}>
          <Image source={Icon.benefit} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Benefit</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            height: 0.5,
            backgroundColor: COLORS.lightGray3,
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate('allowance');
          }}>
          <Image source={Icon.allowance} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Allowance</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            height: 0.5,
            backgroundColor: COLORS.lightGray3,
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate('helpDesk');
          }}>
          <Image source={Icon.helpDesk} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Help Desk</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            height: 0.5,
            backgroundColor: COLORS.lightGray3,
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate('payroll');
          }}>
          <Image source={Icon.payroll} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Payroll</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            height: 0.5,
            backgroundColor: COLORS.lightGray3,
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate('incentive');
          }}>
          <Image source={Icon.incentive} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Incentive</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            height: 0.5,
            backgroundColor: COLORS.lightGray3,
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate('complainBox');
          }}>
          <Image source={Icon.complainBox} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Complain Box</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            height: 0.5,
            backgroundColor: COLORS.lightGray3,
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate('password');
          }}>
          <Image source={Icon.password} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Password Change</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            height: 0.5,
            backgroundColor: COLORS.lightGray3,
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
            navigation.navigate('staffDirectory');
          }}>
          <Image source={Icon.staffDirectory} style={styles.buttonImage} />
          <Text style={styles.buttonText}>Staff Directory</Text>
        </TouchableOpacity>
        <View
          style={{
            width: '90%',
            height: 0.5,
            backgroundColor: COLORS.lightGray3,
            alignSelf: 'center',
            marginBottom: 20,
          }}
        />
        <View
          style={{
            width: '100%',
            height: '10%',
          }}>
          <TouchableOpacity
            style={styles.logout}
            onPress={() => {
              navigation.dispatch(DrawerActions.closeDrawer());
              // Logout();
            }}>
            <Image source={Icon.logout} style={styles.buttonLogout} />
            <Text style={styles.textLogout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="home" component={HomeScreen} />
      <Drawer.Screen name="dashboard" component={DashboardScreen} />
      <Drawer.Screen name="userProfile" component={UserProfileScreen} />
      <Drawer.Screen name="attendance" component={AttendanceScreen} />
      <Drawer.Screen name="leave" component={LeaveScreen} />
      <Drawer.Screen name="benefit" component={BenefitScreen} />
      <Drawer.Screen name="allowance" component={AllowanceScreen} />
      <Drawer.Screen name="helpDesk" component={HelpDeskScreen} />
      <Drawer.Screen name="payroll" component={PayrollScreen} />
      <Drawer.Screen name="incentive" component={IncentiveScreen} />
      <Drawer.Screen name="complainBox" component={ComplainBoxScreen} />
      <Drawer.Screen name="password" component={PasswordScreen} />
      <Drawer.Screen name="staffDirectory" component={StaffDirectoryScreen} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({
  profileContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    marginLeft: 10,
  },
  profileText: {
    color: COLORS.primary,
    fontSize: SIZES.body3,
  },
  // button: {
  //   width: '100%',
  //   height: '10%',
  //   backgroundColor: 'red',
  //   display: 'flex',
  //   flexDirection: 'row',
  // },
  // iconContainer: {
  //   width: '30%',
  // },
  // icon: {
  //   width: 30,
  //   height: 30,
  // },
  buttonText: {
    color: COLORS.primary,
    marginLeft: 30,
  },
  buttonImage: {
    width: 25,
    height: 25,
    tintColor: COLORS.primary,
  },
  button: {
    width: '80%',
    height: '6%',
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonLogout: {
    width: 25,
    height: 25,
    tintColor: COLORS.white,
  },
  logout: {
    width: '90%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
  textLogout: {
    color: COLORS.white,
    marginLeft: 20,
  },
});
