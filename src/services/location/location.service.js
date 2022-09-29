import camelize from "camelize";

export const locationRequest = async (city) => {
  try {
    const response = await fetch(
      `https://us-central1-meals-to-go-cd149.cloudfunctions.net/geocode?city=${city}`
    );
    console.log("Successfully called Geocode in Location Service");

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
