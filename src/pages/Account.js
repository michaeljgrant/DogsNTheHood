import React from "react";
import {
  AccountBack,
  AccountBackOverlay,
  AccountNavContainer,
  AuthButton,
  SpaceBetween,
} from "../components/AccountScreensTemplates";

export const Account = ({ navigation }) => {
  return (
    <AccountBack>
      <AccountBackOverlay />
      <AccountNavContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <SpaceBetween />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountNavContainer>
    </AccountBack>
  );
};
