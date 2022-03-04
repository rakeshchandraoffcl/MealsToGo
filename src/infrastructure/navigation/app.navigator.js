import React, { useContext } from 'react';

import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { Button } from 'react-native-paper';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';
import { Ionicons } from '@expo/vector-icons';
import { LocationContextProvider } from '../../services/locations/location.context';
import { MapScreen } from '../../features/map/screens/map.screen';
import { RestaurantContextProvider } from '../../services/restaurants/restaurant.context';
import { RestaurantNavigator } from './restaurant.navigator';
import { SafeArea } from '../../components/utility/safearea-view.component';
import { SettingNavigator } from './setting.navigator';
import { Text } from '../../components/typography/typography.component';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TAB_ICON = {
  Restaurants: 'restaurant',
  Maps: 'map',
  Settings: 'settings',
};

const createTabBarIcon =
  (route) =>
  ({ focused, color, size }) => {
    return (
      <Ionicons
        name={focused ? TAB_ICON[route.name] : `${TAB_ICON[route.name]}-outline`}
        size={size}
        color={color}
      />
    );
  };

const createScreenOptions = ({ route }) => ({
  tabBarIcon: createTabBarIcon(route),
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
});

function SettingsScreen() {
  const { onSignOut } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings!</Text>
      <Button onPress={() => onSignOut()}>Log Out</Button>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
            <Tab.Screen name="Maps" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingNavigator} />
          </Tab.Navigator>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
