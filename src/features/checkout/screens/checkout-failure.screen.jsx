import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { colours } from "../../../infrastructure/theme/colours";

import { CartIcon, CartIconContainer } from "../components/checkout.styles";

export const CheckoutFailureScreen = ({ route }) => {
  const { error = "" } = route.params;

  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colours.ui.error} />
        <Spacer position="top" size="medium" />
        <Text>{error}!</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
