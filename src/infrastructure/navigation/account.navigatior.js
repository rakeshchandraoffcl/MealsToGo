import { LoginScreen } from '../../features/authentication/screens/login.screen';
import { MainScreen } from '../../features/authentication/screens/main.screen';
import React from 'react';
import { RegisterScreen } from '../../features/authentication/screens/register.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AccountStack = createNativeStackNavigator();
const createScreenOptions = {
  headerShown: false,
};

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator screenOptions={createScreenOptions}>
      <AccountStack.Screen name="Main" component={MainScreen} />
      <AccountStack.Screen name="LogIn" component={LoginScreen} />
      <AccountStack.Screen name="Register" component={RegisterScreen} />
    </AccountStack.Navigator>
  );
};
