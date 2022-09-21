import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthScreen } from "../../features/authentication/screens/authentication.screen";
import { LoginScreen } from "../../features/authentication/screens/login.screen";
import { RegisterScreen } from "../../features/authentication/screens/register.screen";

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={AuthScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
