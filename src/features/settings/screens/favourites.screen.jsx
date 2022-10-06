import React, { useContext } from "react";
import { TouchableHighlight } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card/restaurant-info-card.component";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantList } from "../../restaurants/screens/restaurants/restaurants.style";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
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
  ) : (
    <NoFavouritesArea>
      <Text>No favourites found yet</Text>
    </NoFavouritesArea>
  );
};
