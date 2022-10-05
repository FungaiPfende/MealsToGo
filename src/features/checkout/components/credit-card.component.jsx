import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51Lol7hHmCQpVrsWPcw1bnD8tQbTKyZxsfdA2WxfhVGTd7skaI5LicFYg3B4zS2qRkobZJxJbH70WcqPabhhwUnEg00pEA3e3cT"
);

export const CreditCardInput = () => {
  const handleChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");

    const card = {
      number: "4242424242424242",
      exp_month: "04",
      exp_year: "24",
      cvc: "242",
      name: "Fungai",
    };

    try {
      const info = await stripe.createToken({ card });
      console.log(info);
    } catch (error) {
      console.log("Error on Stripe request:", error.error);
    }

    // console.log(formData);
  };

  return <LiteCreditCardInput onChange={handleChange} />;
};
