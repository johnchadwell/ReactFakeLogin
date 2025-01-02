import React, { createContext, useContext, useState } from "react";


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AuthContext = createContext({});

export const AuthContextProvider = (props) => {
  const [LoggedIn, setLoggedIn] = useState(false);
  
  const login = () => {
   
      setLoggedIn(true);
    };

  const logout = () => {
    sleep(100).then(() => {
      setLoggedIn(false);
    });
  };

  const authContextValue = {
    login,
    logout,
    LoggedIn
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

export const useAuth = () => useContext(AuthContext);

