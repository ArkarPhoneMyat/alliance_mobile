import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppContext, {AppProvider} from './src/context/AppContext';
import {Provider as PaperProvider} from 'react-native-paper';
import MyDrawer from './src/navigation/MyDrawer';
import LoginScreen from './src/screens/login/LoginScreen';
import HelpDeskForm from './src/screens/helpDesk/components/HelpDeskForm';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="login">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="Home" component={MyDrawer} />
        <Stack.Screen name="helpDeskForm" component={HelpDeskForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AppProvider>
      <PaperProvider>
        <App />
      </PaperProvider>
    </AppProvider>
  );
};
