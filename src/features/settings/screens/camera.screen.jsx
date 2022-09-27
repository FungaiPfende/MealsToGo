import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CameraScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
