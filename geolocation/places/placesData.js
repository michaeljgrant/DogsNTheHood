const url = require("url");
const functions = require("firebase-functions");
const { NativeModules } = require("react-native");

NativeModules.exports.placesRequest = (request, response, client) => {
  const { location } = url.parse(request.url, true).query;
  client
    .placesNearby({
      params: {
        location: location,
        radius: 1500,
        type: "park",
        key: functions.config().google.key,
      },
    })
    .then((res) => {
      res.data.results.map(add);
    })
    .catch((err) => {
      response.status(400);
      return response.send(err.response.data.error_messsage);
    });
};
