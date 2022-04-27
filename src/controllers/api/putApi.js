import {authHeader, baseUrl, handleResponse} from '../constant/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const putApi = async (url, obj, setData) => {
  const loginData = await AsyncStorage.getItem('@SSM_LoginData');
  const requestOptions = {
    method: 'PUT',
    async: true,
    crossDomain: true,
    processData: false,
    headers: authHeader(loginData),
    body: JSON.stringify(obj),
  };
  fetch(`${baseUrl}${url}`, requestOptions)
    .then(handleResponse)
    .then(data => setData(data))
    .catch(error => {
      setData(error);
      console.log('put_error>>>', error);
    });
};
