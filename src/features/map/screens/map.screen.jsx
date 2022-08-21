import { StyleSheet } from "react-native";
import React from "react";
import MapView from "react-native-maps";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const MapScreen = () => {
  return (
    <SafeArea>
      <MapView style={styles.map} />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  map: { flex: 1, height: "100%" },
});
