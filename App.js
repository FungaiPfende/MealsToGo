import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {} from "react-native";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { initializeApp } from "firebase/app";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB8JmV9NIUgvBiYxJiIdnD6OOOnSzBRPW4",
  authDomain: "meals-to-go-cd149.firebaseapp.com",
  projectId: "meals-to-go-cd149",
  storageBucket: "meals-to-go-cd149.appspot.com",
  messagingSenderId: "1092426510040",
  appId: "1:1092426510040:web:c7e287b8e6aae9258fb1ad",
};

const MyApp = initializeApp(firebaseConfig);

export default function App() {
  // Load all the fonts to be used by the application
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });
  const [latoLoaded] = useFonts({
    Lato_400Regular,
  });

  // Ensure that the fonts are loaded
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="dark" />
    </>
  );
}
