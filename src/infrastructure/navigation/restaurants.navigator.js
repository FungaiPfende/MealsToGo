import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants/restaurants.screen";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurant-details/restaurant-details.screen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        headerShown: false,
        // ...TransitionPresets.ModalPresentationIOS,
        presentation: "modal", // the line above does the same thing but uses the iOS presets instead.
      }}
    >
      <RestaurantsStack.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
