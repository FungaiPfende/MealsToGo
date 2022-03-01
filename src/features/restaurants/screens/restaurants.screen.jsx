import React from "react";
import { Platform, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

const RestaurantListView = styled.View`
  background-color: ${(props) => props.theme.colours.bg.primary};
  padding: ${(props) => props.theme.space.lg};
  flex: 1;
`;

const SearchView = styled.View`
  padding: ${(props) => props.theme.space.lg};
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>

      <RestaurantListView>
        <RestaurantInfoCard />
      </RestaurantListView>
    </SafeArea>
  );
};
