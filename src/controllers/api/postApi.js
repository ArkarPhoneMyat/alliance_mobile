import {authHeader, baseUrl, handleResponse} from '../constant/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const postApi = async (url, obj, setData) => {
  const loginData = await AsyncStorage.getItem('@SSM_LoginData');
  const requestOptions = {
    method: 'POST',
    headers: authHeader(loginData),
    body: JSON.stringify(obj),
  };
  fetch(`${baseUrl}${url}`, requestOptions)
    .then(handleResponse)
    .then(data => setData(data))
    .catch(error => {
      console.log('post_error>>>', error);
      setData(error);
    });
};
