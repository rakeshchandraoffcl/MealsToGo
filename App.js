import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import { Oswald_400Regular, useFonts as useOswald } from '@expo-google-fonts/oswald';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Navigation } from './src/infrastructure/navigation';
import { theme } from './src/infrastructure/theme';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { LocationContextProvider } from './src/services/locations/location.context';
import { RestaurantContextProvider } from './src/services/restaurants/restaurant.context';

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
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <Navigation />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </ThemeProvider>
  );
}
