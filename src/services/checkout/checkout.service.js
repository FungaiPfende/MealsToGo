import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51Lol7hHmCQpVrsWPcw1bnD8tQbTKyZxsfdA2WxfhVGTd7skaI5LicFYg3B4zS2qRkobZJxJbH70WcqPabhhwUnEg00pEA3e3cT"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const paymentRequest = async (token, amount, name) => {
  const payload = {
    body: JSON.stringify({ token, name, amount }),
    method: "POST",
  };

  try {
    const response = await fetch(`${host}/payment`, payload);
    console.log(
      "Successfully called the PaymentRequest Function in Checkout Service"
    );
    return await response.json();
  } catch (error) {
    return console.log("Error in `paymentRequest` service:", error);
  }
};
