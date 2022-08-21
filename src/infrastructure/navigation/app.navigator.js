import React from "react";
import { View, Text } from "react-native";

import { theme } from "../theme";

import Ionicons from "@expo/vector-icons/Ionicons";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map!</Text>
    </View>
  );
}

const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === "Restaurants") {
      iconName = focused ? "restaurant" : "restaurant-outline";
    } else if (route.name === "Settings") {
      iconName = focused ? "settings" : "settings-outline";
    } else {
      iconName = focused ? "map" : "map-outline";
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: theme.colours.brand.primary,
  tabBarInactiveTintColor: theme.colours.ui.secondary,
  headerShown: false,
});

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
