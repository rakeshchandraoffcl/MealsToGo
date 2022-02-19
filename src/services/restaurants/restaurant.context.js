import React, { createContext, useEffect, useState } from 'react';
import {
	restaurantsRequest,
	transformRestaurantData,
} from './restaurant.service';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchRestaurantsData = async () => {
		try {
			setLoading(true);
			setError(null);
			setTimeout(async () => {
				try {
					const result = await restaurantsRequest();
					const transformedResults = transformRestaurantData(result);
					setRestaurants(transformedResults);
					setLoading(false);
				} catch (error) {
					setLoading(false);
					setError(error);
				}
			}, 2000);
		} catch (error) {
			setLoading(false);
			setError(error);
		}
	};

	useEffect(() => {
		fetchRestaurantsData();
	}, []);

	return (
		<RestaurantContext.Provider
			value={{
				restaurants,
				loading,
				error,
			}}
		>
			{children}
		</RestaurantContext.Provider>
	);
};
