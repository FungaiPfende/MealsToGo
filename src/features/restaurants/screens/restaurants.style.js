import styled from "styled-components/native";
import { FlatList } from "react-native";

export const SearchView = styled.View`
  padding: ${({ theme }) => theme.space.lg};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
