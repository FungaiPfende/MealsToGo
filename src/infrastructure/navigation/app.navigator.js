import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { theme } from "../theme";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map/map.screen";
import { AuthContext } from "../../services/authentication/authentication.context";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  const { onLogout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
      <Button title="Log Out" onPress={() => onLogout()} />
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
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
