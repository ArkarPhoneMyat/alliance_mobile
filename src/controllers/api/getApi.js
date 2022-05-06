import {authHeader, baseUrl, handleResponse} from '../constant/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const getApi = async (url, setData) => {
  const loginData = await AsyncStorage.getItem('@SSM_LoginData');
  const requestOptions = {
    method: 'GET',
    // headers: authHeader(loginData),
  };
  fetch(`${baseUrl}${url}`, requestOptions)
    .then(handleResponse)
    .then(data => {
      setData(data);
    })
    .catch(error => {
      setData(error);
    });
};
