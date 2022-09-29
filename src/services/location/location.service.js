import camelize from "camelize";
import { host, isMock } from "../../utils/env";

export const locationRequest = async (city) => {
  try {
    //     const response = await fetch(`${host}/geocode?city=${city}&mock=${isMock}`);
    const response = await fetch(`${host}/geocode?city=${city}`);
    console.log("Successfully called Geocode Function in Location Service");

    return await response.json();
  } catch (err) {
    return console.log("Error in Location service:", err);
  }
};

export const locationTransform = (result) => {
  const formattedResult = camelize(result);
  const { geometry = {} } = formattedResult.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
