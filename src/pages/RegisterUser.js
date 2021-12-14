import React from "react";
import {
  AccountBack,
  AccountBackOverlay,
} from "../components/LoggedOutBackground";

export const RegisterUser = () => {
  return (
    <AccountBack>
      <AccountBackOverlay />
    </AccountBack>
  );
};
