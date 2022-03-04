// const auth = getAuth();

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getApp, getApps } from 'firebase/app';
import { getAuth, getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const manageAuth = () => {
  if (!getApps().length) {
    return null;
  }
  const app = getApp();
  const auth = getAuth(app);
  if (auth) {
    return auth;
  }
  return initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
};

export const loginService = async (email, password) => {
  const auth = manageAuth();
  if (!auth) return;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signUpService = async (email, password, repeatPassword) => {
  try {
    if (password !== repeatPassword) {
      throw new Error('Password not matched');
    }
    const auth = manageAuth();
    if (!auth) return;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const onAuthChange = (callback) => {
  const auth = manageAuth();
  if (!auth) return;
  onAuthStateChanged(auth, callback);
};
export const signOutService = () => {
  const auth = manageAuth();
  if (!auth) return;
  return signOut(auth);
};
