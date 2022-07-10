import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SearchView, RestaurantList } from "./restaurants.style";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <StatusBar barStyle="dark-content" />

      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>

      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
