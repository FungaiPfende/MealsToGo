import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://127.0.0.1:5001/meals-to-go-cd149/us-central1/geocode?city=${searchTerm}`
  ).then((res) => res.json());
};

export const locationTransform = (result) => {
  console.log(result);
  const formattedResult = camelize(result);
  const { geometry = {} } = formattedResult.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
