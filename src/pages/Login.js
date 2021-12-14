import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import {
  AccountBack,
  AuthInput,
  AuthButton,
} from "../components/LoggedOutBackground";
import { Text, View } from "react-native";
import { LoginContext } from "../service/LoginContext";

// Styled components
const LoginForm = styled.View`
  background-color: ${(props) => props.theme.colors.brand.primary}aa;
  flex: 1;
  width: 80%;
  height: 80%;
  padding: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 10px;
`;
const TitleContainer = styled.View`
  flex: 0.2;
  align-items: center;
  justify-content: center;
`;
const InputContainer = styled.View`
  flex: 0.5;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ButtonContainer = styled.View`
  flex: 0.2;
  align-items: center;
  justify-content: center;
`;
const Header = styled.Text`
  color: ${(props) => props.theme.colors.brand.secondary};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-family: ${(props) => props.theme.fonts.heading};
`;
const ErrorSpacer = styled.View`
  height: 10px;
  justify-content: center;
  align-items: center;
`;
const ErrorMsg = styled.Text`
  color: ${(props) => props.theme.colors.ui.cancel};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(LoginContext);
  return (
    <AccountBack>
      <LoginForm>
        <TitleContainer>
          <Header>Login</Header>
        </TitleContainer>
        <InputContainer>
          <AuthInput
            value={email}
            textContentType="emailaddress"
            keyboardType="email-address"
            label={"Email"}
            autoCapitalize="none"
            onChangeText={(eInput) => setEmail(eInput)}
          />
          <AuthInput
            textContentType="password"
            value={password}
            label={"Password"}
            autoCapitalize="none"
            secure
            secureTextEntry
            onChangeText={(passInput) => setPassword(passInput)}
          />
          <ErrorSpacer>
            {error && <ErrorMsg variant="error">{error}</ErrorMsg>}
          </ErrorSpacer>
        </InputContainer>
        <ButtonContainer>
          <AuthButton
            onPress={() => onLogin(email, password)}
            mode="contained"
            icon="lock-open-outline"
          >
            Login
          </AuthButton>
        </ButtonContainer>
      </LoginForm>
    </AccountBack>
  );
};
