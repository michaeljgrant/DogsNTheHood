import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import {
  AccountBack,
  AuthButton,
  AuthInput,
  LoginForm,
  TitleContainer,
  Header,
  InputContainer,
  ErrorSpacer,
  ErrorMsg,
  ButtonContainer,
} from "../components/AccountScreensTemplates";
import { LoginContext } from "../service/LoginContext";

export const RegisterUser = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(LoginContext);
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
          <AuthInput
            textContentType="password"
            value={confirmPassword}
            label={"Confirm Password"}
            autoCapitalize="none"
            secure
            secureTextEntry
            onChangeText={(confirmPassInput) =>
              setConfirmPassword(confirmPassInput)
            }
          />
          <ErrorSpacer>
            {error && <ErrorMsg variant="error">{error}</ErrorMsg>}
          </ErrorSpacer>
        </InputContainer>
        <ButtonContainer>
          {!isLoading ? (
            <AuthButton
              onPress={() => onRegister(email, password, confirmPassword)}
              mode="contained"
              icon="email"
            >
              Register
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
