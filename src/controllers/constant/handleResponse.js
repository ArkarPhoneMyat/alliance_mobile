import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import RNRestart from 'react-native-restart';

export const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 400) {
        return data;
      }
      if (response.status === 404) {
        return data;
      }
      if (response.status === 401) {
        AsyncStorage.removeItem('@SSM_LoginData');
        Alert.alert(
          'Sein Shwe Moe',
          'Please Login Again!',
          [{text: 'Ok', onPress: () => RNRestart.Restart()}],
          {cancelable: false},
        );
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
};
