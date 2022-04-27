import {authHeader, baseUrl, handleResponse} from '../constant/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const deleteApi = async (url, obj = {}, setData) => {
  const loginData = await AsyncStorage.getItem('@SSM_LoginData');
  var objBody = {
    method: 'DELETE',
    headers: authHeader(loginData),
    body: JSON.stringify(obj),
  };
  var objNoBody = {
    method: 'DELETE',
    headers: authHeader(loginData),
  };
  const requestOptions = obj === {} ? objNoBody : objBody;
  fetch(`${baseUrl}${url}`, requestOptions)
    .then(handleResponse)
    .then(data => setData(data))
    .catch(error => {
      console.log('delete_error>>>', error);
      setData(error);
    });
};
