import React, { createContext, useState } from 'react';
import {
  loginService,
  onAuthChange,
  signOutService,
  signUpService,
} from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [rgisterLoading, setRegisterLoading] = useState(false);
  const [error, setError] = useState(null);
  const [registerError, setRegisterError] = useState(null);

  onAuthChange((u) => {
    if (u) {
      setUser(u);
      setInitialLoading(false);
    } else {
      setInitialLoading(false);
    }
  });

  const onLogin = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      const resp = await loginService(email, password);
      setUser(resp);
      setLoading(false);
    } catch (error) {
      setUser(null);
      setLoading(false);
      setError(error.message);
    }
  };
  const onRegister = async (email, password, repeatPassword) => {
    try {
      setRegisterLoading(true);
      setRegisterError(null);
      const resp = await signUpService(email, password, repeatPassword);
      setUser(resp);
      setRegisterLoading(false);
    } catch (error) {
      console.log(error.message);
      setUser(null);
      setRegisterLoading(false);
      setRegisterError(error.message);
    }
  };

  const onSignOut = () => {
    setUser(null);
    signOutService();
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        loading,
        rgisterLoading,
        error,
        registerError,
        user,
        onLogin,
        onRegister,
        onSignOut,
        initialLoading,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
