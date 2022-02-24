import React, { createContext, useCallback, useEffect, useState } from 'react';
import { locationRequest, transformLocationData } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('san francisco');

  const fetchLocationData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await locationRequest(keyword.toLocaleLowerCase());
      const transformedResults = transformLocationData(result);
      setLocation(transformedResults);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, [keyword]);

  const onSearch = (keyword) => {
    if (!keyword.length) return;
    setKeyword(keyword);
  };

  useEffect(() => {
    fetchLocationData();
  }, [fetchLocationData]);

  return (
    <LocationContext.Provider
      value={{
        location,
        loading,
        error,
        keyword,
        search: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
