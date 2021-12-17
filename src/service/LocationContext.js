// import React, { createContext, useState, useEffect } from "react";
// import { locationRequest, locationTransform } from "./LocationService";

// export const LocationContext = createContext();

// export const LocationContextProvider = ({ children }) => {
//   const [keyboard, setKeyword] = useState();
//   const [location, setLocation] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const onSearch = (searchKeyword) => {
//     setIsLoading(true);
//     setKeyword(searchKeyword);
//   };
//   useEffect(() => {
//     if (!setKeyword.length) {
//       return;
//     }
//     locationRequest(keyword.toLowerCase())
//       .then(locationTransform)
//       .then((result) => {
//         setError(null);
//         setIsLoading(false);
//         setLocation(result);
//       })
//       .catch((err) => {
//         setIsLoading(false);
//         setError(err);
//       });
//   }, [keyword]);
// };
