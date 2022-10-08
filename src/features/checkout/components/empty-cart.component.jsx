import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { CartIcon, CartIconContainer } from "./checkout.styles";

export const EmptyCart = () => {
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="cart-off" />
        <Spacer position="top" size="medium" />
        <Text>Your cart is empty!</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
