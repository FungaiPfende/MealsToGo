import React from "react";
import { Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

import { CompactRestaurantInfo } from "../../../../components/restaurant/compact-restaurant-info.component";
import { TouchableOpacity } from "react-native";

export const MapCallout = ({ restaurant }) => {
  const navigation = useNavigation();

  return (
    <Callout>
      <TouchableOpacity
        activeOpacity={0.65}
        onPress={() => navigation.navigate("RestaurantDetails", { restaurant })}
      >
        <CompactRestaurantInfo restaurant={restaurant} />
      </TouchableOpacity>
    </Callout>
  );
};
