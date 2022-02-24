import React, { createContext, useContext, useEffect, useState } from 'react';
import { LocationContext } from '../locations/location.context';
import { restaurantsRequest, transformRestaurantData } from './restaurant.service';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const fetchRestaurantsData = async (locationString) => {
    try {
      setRestaurants([]);
      setLoading(true);
      setError(null);
      setTimeout(async () => {
        try {
          const result = await restaurantsRequest(locationString);
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
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      fetchRestaurantsData(locationString);
    }
  }, [location]);

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
