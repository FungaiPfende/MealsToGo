import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { CreditCardInput } from "../components/credit-card.component";
import { EmptyCart } from "../components/empty-cart.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card/restaurant-info-card.component";
import {
  ClearButton,
  NameInput,
  PayButton,
  PaymentProcessing,
} from "../components/checkout.styles";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { CartContext } from "../../../services/cart/cart.context";
import { paymentRequest } from "../../../services/checkout/checkout.service";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);

  const [name, setName] = useState(null);
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      console.log("Error: No card available");
      return;
    }

    paymentRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        console.log("Payment successful");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("Payment failed:", error);
      });
  };

  if (!cart.length || !restaurant) {
    return <EmptyCart />;
  }

  const handleChange = (text) => {
    if (text.length) {
      setName(text);
    } else {
      setName(null);
    }
  };

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />

      {isLoading && <PaymentProcessing />}

      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="xlarge">
            <Text variant="title">Your Order:</Text>
          </Spacer>

          <List.Section>
            {cart.map(({ item, price }, index) => (
              <List.Item
                title={`${item} - $${price / 100}`}
                key={`${item}-${index}`}
              />
            ))}
          </List.Section>
          <Text variant="label">{`Total: $${sum / 100}`}</Text>

          <Spacer position="top" size="xlarge">
            <Text variant="title">Make Payment</Text>
            <NameInput
              label="Name"
              value={name}
              onChangeText={(t) => handleChange(t)}
            />

            {name && <CreditCardInput name={name} onSuccess={setCard} />}

            <Spacer position="top" size="xlarge">
              <PayButton onPress={() => onPay()} disabled={isLoading}>
                Pay
              </PayButton>
              <Spacer position="top" size="large" />
              <ClearButton onPress={() => clearCart()} disabled={isLoading}>
                Clear Cart
              </ClearButton>
            </Spacer>
          </Spacer>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
