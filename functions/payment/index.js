module.exports.paymentRequest = (request, response, stripeClient) => {
  const body = JSON.parse(request.body);
  const { token, amount } = body;

  stripeClient.paymentIntents
    .create({
      amount,
      currency: "USD",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntent) => response.json(paymentIntent))
    .catch((error) => {
      console.log(error);
      response.status(400);
      response.send(error);
    });
};
