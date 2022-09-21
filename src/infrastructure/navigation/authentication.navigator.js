import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AccountScreen = () => (
  <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
    <Text>Account Screen</Text>
  </View>
);

const LoginScreen = () => (
  <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
    <Text>Login Screen</Text>
  </View>
);

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
