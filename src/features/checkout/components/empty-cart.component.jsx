import React from "react";

import { Text } from "../../../components/typography/text.component";

import { ExpoStatusBar } from "../../../components/utility/expo-status-bar.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { CartIcon, CartIconContainer } from "./checkout.styles";

export const EmptyCart = () => {
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="cart-off" />
        <Spacer position="top" size="medium" />
        <Text>Your cart is empty!</Text>
      </CartIconContainer>

      <ExpoStatusBar />
    </SafeArea>
  );
};
