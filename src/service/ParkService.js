import camelize from "camelize";
import { host, isMock } from "../utils/env";

export const ParksRequest = (location) => {
  return fetch(`${host}/placesNearby?location=${location}&mock=${isMock}`).then(
    (res) => {
      return res.json();
    }
  );
};

export const ParksTransform = ({ results = [] }) => {
  const mappedResults = results.map((park) => {
    return {
      ...park,
      address: park.vicinity,
    };
  });
  return camelize(mappedResults);
};
