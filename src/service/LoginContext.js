import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { LoginAuthenticator } from "./LoginAuthenticator";
export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
      setIsLoading(true);
      LoginAuthenticator(email, password).then((userRes)=>{
        setUser(userRes);
        setIsLoading(false);
      }).catch (error) =>{
          setIsLoading(false);
          setError(error)
      }
  };

  return (
    <LoginContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
