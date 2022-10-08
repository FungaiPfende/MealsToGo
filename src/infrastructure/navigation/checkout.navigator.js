import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CheckoutScreen } from "../../features/checkout/screens/checkout.screen";
import { CheckoutSuccessScreen } from "../../features/checkout/screens/checkout-success.screen";
import { CheckoutFailureScreen } from "../../features/checkout/screens/checkout-failure.screen";

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = () => (
  <CheckoutStack.Navigator screenOptions={{ headerShown: false }}>
    <CheckoutStack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    <CheckoutStack.Screen
      name="CheckoutSuccessScreen"
      component={CheckoutSuccessScreen}
    />
    <CheckoutStack.Screen
      name="CheckoutFailureScreen"
      component={CheckoutFailureScreen}
    />
  </CheckoutStack.Navigator>
);
