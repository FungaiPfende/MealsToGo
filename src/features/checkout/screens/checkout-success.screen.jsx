import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { colours } from "../../../infrastructure/theme/colours";

import { CartIcon, CartIconContainer } from "../components/checkout.styles";

export const CheckoutSuccessScreen = () => {
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="check-bold" bg={colours.ui.success} />
        <Spacer position="top" size="medium" />

        <Text>Payment made successfully!</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
