import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RestaurantDetailsScreen } from '../../features/restaurants/screens/restaurant-details.screen';
import { RestaurantScreen } from '../../features/restaurants/screens/restaurant.screen';

const RestaurantStack = createNativeStackNavigator();
const createScreenOptions = {
  headerShown: false,
  presentation: 'modal',
};

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={createScreenOptions}>
      <RestaurantStack.Screen name="RestaurantHome" component={RestaurantScreen} />
      <RestaurantStack.Screen name="RestaurantDetails" component={RestaurantDetailsScreen} />
    </RestaurantStack.Navigator>
  );
};
