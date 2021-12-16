import React from "react";

import { ParkViewPopUp } from "./CompactMapDisplay";

export const ParkMapCallout = ({ park }) => {
  return <ParkViewPopUp isMap park={park} />;
};
