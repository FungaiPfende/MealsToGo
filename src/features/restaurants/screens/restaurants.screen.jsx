import React from "react";
import { Searchbar } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SearchView, SafeArea, RestaurantList } from "./restaurants.style";

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, {}]}
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
