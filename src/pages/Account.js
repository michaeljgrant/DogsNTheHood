import React from "react";
import styled from "styled-components/native";
import {
  AccountBack,
  AccountBackOverlay,
  AccountNavContainer,
  AuthButton,
} from "../components/LoggedOutBackground";
const SpaceBetween = styled.View`
  padding: 15px;
`;

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
