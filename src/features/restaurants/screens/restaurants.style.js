import styled from "styled-components/native";
import { Platform, StatusBar, FlatList } from "react-native";

const isAndroid = Platform.OS === "android";

export const SearchView = styled.View`
  padding: ${({ theme }) => theme.space.lg};
`;

// Set the top margin of Android devices to clear the status bar.
export const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
