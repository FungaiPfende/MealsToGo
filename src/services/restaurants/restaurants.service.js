import camelize from "camelize";
import { host } from "../../utils/env";

export const restaurantsRequest = async (location) => {
  try {
    const response = await fetch(`${host}/nearbyPlaces?location=${location}`);
    console.log(
      "Successfully called NearbyPlaces Function in Restaurant Service"
    );

    return await response.json();
  } catch (err) {
    return console.log("Error in Restaurant service:", err);
  }
};

// Maps over the properties and add new properties for my own use
// Transforms all properties to be camelCase using the `camelize` package.
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      address: restaurant.vicinity,
    };
  });

  return camelize(mappedResults);
};
