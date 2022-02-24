import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useEffect, useState } from 'react';

export const FavouritesContext = createContext();
const SORAGE_KEY = '@favourites';

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const storeFavs = useCallback(async () => {
    try {
      await AsyncStorage.setItem(SORAGE_KEY, JSON.stringify(favourites));
    } catch (e) {
      console.log('saving eror', e);
    }
  }, [favourites]);

  const getFavsData = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem(SORAGE_KEY);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log('fetching eror', e);
    }
  }, []);

  const addFavourite = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const removeFavourite = (restaurant) => {
    const filteredFavs = favourites.filter((c) => c.placeId !== restaurant.placeId);
    setFavourites(filteredFavs);
  };

  // Get favourites on initial rendor
  useEffect(() => {
    getFavsData();
  }, [getFavsData]);

  // Store favourite on favourites change
  useEffect(() => {
    storeFavs();
  }, [storeFavs]);
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
