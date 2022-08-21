import React from "react";
import { Callout } from "react-native-maps";
import { CompactRestaurantInfo } from "../../../../components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => {
  return (
    <Callout>
      <CompactRestaurantInfo restaurant={restaurant} />
    </Callout>
  );
};
