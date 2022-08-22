import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";

import { FavouritesContext } from "../../services/favourites/favourites.context";

import { FavouriteButton } from "./favourite-icon.styles";

export const FavouriteIcon = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  const handlePress = () =>
    !isFavourite
      ? addToFavourites(restaurant)
      : removeFromFavourites(restaurant);

  return (
    <FavouriteButton onPress={handlePress}>
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
