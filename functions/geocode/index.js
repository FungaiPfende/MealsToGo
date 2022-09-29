const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    const locationMock = locationsMock[city.toLowerCase()];

    return response.json(locationMock);
  }

  client
    .geocode({
      params: {
        address: city,
        key: "apikey",
      },
      timeout: 1000,
    })
    .then((res) => response.json(res.data))
    .catch((err) => {
      response.status(err.response.status);
      return response.send(
        "Error in Geocode Function's `client` method:",
        err.response.data.error_message
      );
    });
};
