import { CameraScreen } from '../../features/settings/screens/camera.screen';
import { FavouritesScreen } from '../../features/settings/screens/favourites.screen';
import React from 'react';
import { SettingsHomeScreen } from '../../features/settings/screens/home.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SettingsStack = createNativeStackNavigator();
const createScreenOptions = {};

export const SettingNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={createScreenOptions} initialRouteName="SettingsHome">
      <SettingsStack.Screen
        options={{
          headerShown: false,
        }}
        name="SettingsHome"
        component={SettingsHomeScreen}
      />
      <SettingsStack.Screen
        options={{
          title: 'My favourites',
        }}
        name="MyFavourites"
        component={FavouritesScreen}
      />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
