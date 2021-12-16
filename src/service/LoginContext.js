import React, { useState, createContext } from "react";
import {
  LoginAuthenticator,
  RegisterAuthenticator,
  LogoutAuthenticator,
} from "./LoginAuthenticator";
export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    LoginAuthenticator(email, password)
      .then((userRes) => {
        setUser(userRes);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  const onRegister = (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    RegisterAuthenticator(email, password, confirmPassword)
      .then((userResp) => {
        setUser(userResp);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  const onLogout = () => {
    LogoutAuthenticator().then(() => {
      setUser(null);
      setError(null);
    });
  };
  return (
    <LoginContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
