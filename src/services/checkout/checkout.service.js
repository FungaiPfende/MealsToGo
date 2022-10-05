import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51Lol7hHmCQpVrsWPcw1bnD8tQbTKyZxsfdA2WxfhVGTd7skaI5LicFYg3B4zS2qRkobZJxJbH70WcqPabhhwUnEg00pEA3e3cT"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
