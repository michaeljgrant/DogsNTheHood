const { locations } = require("./geocode");
const url = require("url");
const functions = require("firebase-functions");

module.exports.geocodeRequest = (request, response, client) => {
  const { city } = url.parse(request.url, true).query;
  client
    .geocode({
      params: {
        address: city,
        key: functions.config().google.key,
      },
    })
    .then((res) => {
      return response.json(res.data);
    })
    .catch((err) => {
      response.status(400);
      return response.send(err.response.data.error_message);
    });
};
