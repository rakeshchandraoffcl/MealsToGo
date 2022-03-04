import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import { Oswald_400Regular, useFonts as useOswald } from '@expo-google-fonts/oswald';
import { getApps, initializeApp } from 'firebase/app';

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import { Navigation } from './src/infrastructure/navigation';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

const firebaseConfig = {
  apiKey: 'AIzaSyBJtQL1W7qOGPRpAvTpOr9pFGQzLd718qo',
  authDomain: 'mealstogo-e7c2b.firebaseapp.com',
  projectId: 'mealstogo-e7c2b',
  storageBucket: 'mealstogo-e7c2b.appspot.com',
  messagingSenderId: '1062577689261',
  appId: '1:1062577689261:web:8f6d0fecec900ec0046c24',
};

// Initialize Firebase
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

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
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}
