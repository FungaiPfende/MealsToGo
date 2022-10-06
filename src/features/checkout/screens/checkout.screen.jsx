import React, { useContext } from "react";
import { ScrollView } from "react-native";

import { CreditCardInput } from "../components/credit-card.component";
import { EmptyCart } from "../components/empty-cart.component";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

import { CartContext } from "../../../services/cart/cart.context";

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);

  if (!cart.length || !restaurant) {
    return <EmptyCart />;
  }

  return (
    <SafeArea>
      <CreditCardInput />
      <ScrollView>
        <Text>{JSON.stringify(cart)}</Text>
        <Text>
          Restaurants: {"\n"}
          {JSON.stringify(restaurant)}
        </Text>
      </ScrollView>
    </SafeArea>
  );
};
