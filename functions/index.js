const functions = require("firebase-functions");
const { Client } = require("@googlemaps/google-maps-services-js");

const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { paymentRequest } = require("./payment");

const googleClient = new Client({});
const stripeClient = require("stripe")(process.env.SECRET_STRIPE_KEY);

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, googleClient);
});

exports.nearbyPlaces = functions.https.onRequest((request, response) => {
  placesRequest(request, response, googleClient);
});

exports.payment = functions.https.onRequest((request, response) => {
  paymentRequest(request, response, stripeClient);
});
