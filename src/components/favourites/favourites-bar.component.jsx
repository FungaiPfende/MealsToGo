import { ScrollView, TouchableOpacity } from "react-native";
import React from "react";

import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

import { FavouritesWrapper } from "./favourites-bar.styles";

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) return null;

  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption">My Favourites</Text>
      </Spacer>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name.split(" ").join("");
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetails", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
