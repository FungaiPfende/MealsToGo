import { ScrollView } from "react-native";
import React, { useContext } from "react";
import { List } from "react-native-paper";

import { SafeArea } from "../../../../components/utility/safe-area.component";
import { Spacer } from "../../../../components/spacer/spacer.component";

import { RestaurantInfoCard } from "../../components/restaurant-info-card/restaurant-info-card.component";

import { OrderButton } from "./restaurant-details.styles";
import { CartContext } from "../../../../services/cart/cart.context";

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);

  const handlePress = () =>
    addToCart(
      { item: `${restaurant.name}'s Special`, price: 1299 },
      restaurant
    );

  return (
    <SafeArea>
      <ScrollView>
        <RestaurantInfoCard restaurant={restaurant} />

        <List.Section title="Food & Drinks">
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
          >
            <List.Item title="Eggs and bacon" />
            <List.Item title="French toast" />
            <List.Item title="Oats with juice" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
          >
            <List.Item title="Rice & chicken" />
            <List.Item title="Fish & Chips" />
            <List.Item title="Steak sandwich" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
          >
            <List.Item title="Rice & chicken" />
            <List.Item title="Fish & Chips" />
            <List.Item title="Sadza" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
          >
            <List.Item title="Gin & Tonic" />
            <List.Item title="Vodka & Red Bull" />
            <List.Item title="Fanta" />
            <List.Item title="Tea" />
          </List.Accordion>
        </List.Section>
      </ScrollView>

      <Spacer position="bottom" size="large">
        <OrderButton mode="contained" icon="cash-usd" onPress={handlePress}>
          Order Special for only $12.99!
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
