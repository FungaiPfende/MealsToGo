import React, { createContext, useState } from "react";

import {
  loginRequest,
  logoutRequest,
  registerRequest,
  checkUser,
} from "./authentication.service";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  checkUser((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((usr) => {
        setUser(usr);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  const onLogout = () => {
    setUser(null);
    logoutRequest();
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setIsLoading(false);
      setError("Error: Passwords do not match!");
      return;
    }

    setIsLoading(true);
    registerRequest(email, password)
      .then((usr) => {
        setUser(usr);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  return (
    <AuthContext.Provider
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
    </AuthContext.Provider>
  );
};
