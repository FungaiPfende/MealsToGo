import React, { useContext } from "react";
import { Searchbar, Colors } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { colours } from "../../../infrastructure/theme/colours";

import {
  SearchView,
  RestaurantList,
  Loader,
  LoadingContainer,
} from "./restaurants.style";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

export const RestaurantsScreen = () => {
  // Choose which context I want to use in this component
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loader size={50} animating={true} color={colours.brand.primary} />
        </LoadingContainer>
      )}

      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>

      <RestaurantList
        data={restaurants} // This data comes straight from the context I set up earlier
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
