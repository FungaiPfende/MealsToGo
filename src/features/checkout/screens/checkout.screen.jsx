import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { Divider, List } from "react-native-paper";

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
import { KeyboardAvoider } from "../../../components/utility/keyboard-avoider.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { CartContext } from "../../../services/cart/cart.context";
import { paymentRequest } from "../../../services/checkout/checkout.service";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);

  const [name, setName] = useState(null);
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = async () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate("CheckoutFailureScreen", {
        error: "Please fill in a valid card",
      });
      console.log("Error: Invalid Card");
      return;
    }

    try {
      await paymentRequest(card.id, sum, name);
      setIsLoading(false);
      navigation.navigate("CheckoutSuccessScreen");
      console.log("Payment successful");
      clearCart();
    } catch (error) {
      setIsLoading(false);
      navigation.navigate("CheckoutFailureScreen", {
        error: error,
      });
      console.log("Payment failed:", error);
    }
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

  const handleFailure = () =>
    navigation.navigate("CheckoutFailureScreen", {
      error: "Something went wrong processing your payment",
    });

  return (
    <SafeArea>
      <KeyboardAvoider>
        <RestaurantInfoCard restaurant={restaurant} />

        {isLoading && <PaymentProcessing />}

        <ScrollView>
          <Spacer position="left" size="medium">
            {/* Order List */}
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

            <Spacer position="top" size="large">
              <Divider />
            </Spacer>

            {/* Input Fields */}
            <Spacer position="top" size="large">
              <Text variant="title">Make Payment</Text>

              <NameInput
                label="Name"
                value={name}
                onChangeText={(t) => handleChange(t)}
              />

              {name && (
                <CreditCardInput
                  name={name}
                  onSuccess={setCard}
                  onFailure={handleFailure}
                />
              )}

              {/* Buttons */}
              <Spacer position="top" size="xlarge">
                <Spacer position="bottom" size="xxlarge">
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
          </Spacer>
        </ScrollView>
      </KeyboardAvoider>
    </SafeArea>
  );
};
