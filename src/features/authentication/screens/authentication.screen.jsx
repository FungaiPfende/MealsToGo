import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AuthScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
