import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

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
        component={() => <Text>Restaurant Details</Text>}
      />
    </RestaurantsStack.Navigator>
  );
};
