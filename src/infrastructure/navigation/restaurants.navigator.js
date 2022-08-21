import React from "react";
import { Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantsStack.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetails"
        component={() => <Text>Restaurant Details</Text>}
      />
    </RestaurantsStack.Navigator>
  );
};
