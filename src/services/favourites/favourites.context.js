import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../authentication/authentication.context';

export const FavouritesContext = createContext();
const SORAGE_KEY = '@favourites';

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext);

  const storeFavs = useCallback(
    async (uId) => {
      try {
        await AsyncStorage.setItem(`${SORAGE_KEY}-${uId}`, JSON.stringify(favourites));
      } catch (e) {
        console.log('saving eror', e);
      }
    },
    [favourites]
  );

  const getFavsData = useCallback(async (uId) => {
    try {
      const value = await AsyncStorage.getItem(`${SORAGE_KEY}-${uId}`);
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
    if (user) {
      getFavsData(user.uid);
    }
  }, [getFavsData, user]);

  // Store favourite on favourites change
  useEffect(() => {
    if (user) {
      storeFavs(user.uid);
    }
  }, [storeFavs, user]);
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
