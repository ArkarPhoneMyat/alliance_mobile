import React, {createContext, useState} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [loginData, setLoginData] = useState();
  return (
    <AppContext.Provider value={{loginData, setLoginData}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
