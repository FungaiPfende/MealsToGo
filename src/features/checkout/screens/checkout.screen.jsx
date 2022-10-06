import React, { useContext } from "react";

import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { CartContext } from "../../../services/cart/cart.context";
import { Text } from "../../../components/typography/text.component";

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);

  return (
    <SafeArea>
      <CreditCardInput />
      <Text>{JSON.stringify(cart)}</Text>
      <Text>{JSON.stringify(restaurant)}</Text>
    </SafeArea>
  );
};
