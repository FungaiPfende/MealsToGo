import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      reject("Location not found");
    }
    resolve(mock);
  });
};

// Maps over the properties and add new properties for my own use
// Transforms all properties to be camelCase using the `camelize` package.
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((photo) => {
      return mockImages[Math.round(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      address: restaurant.vicinity,
    };
  });

  return camelize(mappedResults);
};
