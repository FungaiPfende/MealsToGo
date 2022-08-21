import React from "react";

import { CompactImage, Item } from "./compact-restaurant-info.styles";
import { Text } from "../typography/text.component";

export const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <Item>
      <CompactImage source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
