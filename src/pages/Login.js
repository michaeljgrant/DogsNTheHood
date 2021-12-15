import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import {
  AccountBack,
  AuthInput,
  AuthButton,
  ErrorMsg,
  ErrorSpacer,
  LoginForm,
  TitleContainer,
  InputContainer,
  ButtonContainer,
  Header,
} from "../components/AccountScreensTemplates";
import { LoginContext } from "../service/LoginContext";

export const Login = ({ login, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useContext(LoginContext);
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
          {!isLoading ? (
            <AuthButton
              onPress={() => onLogin(email, password)}
              mode="contained"
              icon="lock-open-outline"
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
          <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
        </ButtonContainer>
      </LoginForm>
    </AccountBack>
  );
};
