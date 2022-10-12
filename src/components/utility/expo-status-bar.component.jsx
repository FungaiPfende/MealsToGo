import React from "react";
import { StatusBar } from "expo-status-bar";

export const ExpoStatusBar = ({ theme }) => <StatusBar style={theme} />;

ExpoStatusBar.defaultProps = {
  theme: "dark",
};
