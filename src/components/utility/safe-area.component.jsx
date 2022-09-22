import { StatusBar, Platform } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

// Set the top margin of Android devices to clear the status bar.
export const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  background-color: ${({ theme }) => theme.colours.bg.primary};
`;
