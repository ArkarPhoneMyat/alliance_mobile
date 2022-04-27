export const authHeader = loginData => {
  if (loginData !== null) {
    return {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
      Authorization: `Bearer ${loginData}`,
      'cache-control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
  } else {
    return {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
      'cache-control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    };
  }
};
