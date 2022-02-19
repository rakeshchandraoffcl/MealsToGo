import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
	Oswald_400Regular,
	useFonts as useOswald,
} from '@expo-google-fonts/oswald';

import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RestaurantContextProvider } from './src/services/restaurants/restaurant.context';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurant.screen';
import { SafeArea } from './src/components/utility/safearea-view.component';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from './src/infrastructure/theme';

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
				name={
					focused
						? TAB_ICON[route.name]
						: `${TAB_ICON[route.name]}-outline`
				}
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

const MapsScreen = () => {
	return (
		<SafeArea>
			<Text>Maps!</Text>
		</SafeArea>
	);
};

function SettingsScreen() {
	return (
		<SafeArea>
			<Text>Settings!</Text>
		</SafeArea>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});
	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}
	return (
		<ThemeProvider theme={theme}>
			<RestaurantContextProvider>
				<NavigationContainer>
					<Tab.Navigator screenOptions={createScreenOptions}>
						<Tab.Screen
							name="Restaurants"
							component={RestaurantScreen}
						/>
						<Tab.Screen name="Maps" component={MapsScreen} />
						<Tab.Screen
							name="Settings"
							component={SettingsScreen}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</RestaurantContextProvider>
		</ThemeProvider>
	);
}
