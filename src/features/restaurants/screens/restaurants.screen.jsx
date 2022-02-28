import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search" />
      </View>

      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },

  search: {
    padding: 15,
  },

  list: {
    backgroundColor: "blue",
    padding: 15,
    flex: 1,
  },
});
