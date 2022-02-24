import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeArea } from '../../components/utility/safearea-view.component';
import { MapScreen } from '../../features/map/screens/map.screen';
import { RestaurantNavigator } from './restaurant.navigator';

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
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
        <Tab.Screen name="Maps" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
