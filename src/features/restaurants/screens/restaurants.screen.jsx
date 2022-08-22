import React, { useContext } from "react";
import { TouchableOpacity as TouchableHighlight } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantInfoCard } from "../components/restaurant-info-card/restaurant-info-card.component";
import { Search } from "../components/search/search.component";

import { colours } from "../../../infrastructure/theme/colours";

import { RestaurantList, Loader, LoadingContainer } from "./restaurants.style";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

export const RestaurantsScreen = ({ navigation }) => {
  // Choose which context I want to use in this component
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loader size={50} animating={true} color={colours.brand.primary} />
        </LoadingContainer>
      )}

      <Search />

      <RestaurantList
        data={restaurants} // This data comes straight from the context I set up earlier
        renderItem={({ item }) => (
          <TouchableHighlight
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("RestaurantDetails", { restaurant: item })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableHighlight>
        )}
        keyExtractor={(item) => item.name}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
