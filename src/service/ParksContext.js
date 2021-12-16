import React, { useState, useContext, createContext, useEffect } from "react";

import { ParksRequest, ParksTransform } from "./ParkService";

import { LocationContext } from "./LocationContext";

export const ParkContext = createContext();

export const ParkContextProvider = ({ children }) => {
  const [parks, setParks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);
};
const retrieveParks = (loc) => {
  setIsLoading(true);
  setParks([]);
  ParksRequest(loc)
    .then(ParksTransform)
    .then((results) => {
      setError(null);
      setIsLoading(false);
      setParks(results);
    })
    .catch((err) => {
      setParks([]);
      setIsLoading(false);
      setError(err);
    });
};
useEffect(() => {
  if (location) {
    const locationString = `${location.lat}, ${location.lng}`;
    retrieveParks(locationString);
  }
}, [location]);

return (
  <ParkContext.Provider
    value={{
      parks,
      isLoading,
      error,
    }}
  >
    {children}
  </ParkContext.Provider>
);
