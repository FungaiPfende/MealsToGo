import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />

      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
