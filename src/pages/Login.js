import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar, View, Text, SafeAreaView } from "react-native";
import { InputField } from "../components/InputField";
import { RectangularButton } from "../components/RectangularButton";
import { colors } from "../utils/theme/colors";
import { fontSizes, fonts, fontWeights } from "../utils/theme/fonts";
// Styled components
const SafeArea = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors.brand.secondary};
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
const LoginForm = styled(View)`
  background-color: ${(props) => props.theme.colors.brand.primary};
  flex: 1;
  width: 80%;
  height: 80%;
  padding: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 10px;
`;
const TitleContainer = styled(View)`
  flex: 0.2;
  align-items: center;
  justify-content: center;
`;
const InputContainer = styled(View)`
  flex: 0.5;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled(View)`
  flex: 0.2;
  align-items: center;
  justify-content: center;
`;
const Header = styled(Text)`
  font-size: ${fontSizes.h1};
  font-weight: ${fontWeights.regular};
  font-family: ${fonts.heading};
`;

export const Login = ({ login }) => {
  const buttonStyle = {
    height: "65%",
    width: "80%",
    backgroundColor: colors.ui.success,
    fontSize: fontSizes.h3,
  };
  const inputStyle = {
    height: 100,
    width: 250,
    borderColor: colors.brand.border,
  };
  const confirmLogin = () => {
    login(true);
  };
  return (
    <SafeArea>
      <LoginForm>
        <TitleContainer>
          <Header>Login</Header>
        </TitleContainer>
        <InputContainer>
          <InputField inputStyle={inputStyle} label={"Username"} />
          <InputField inputStyle={inputStyle} label={"Password"} />
          <InputField inputStyle={inputStyle} label={"Confirm Password"} />
        </InputContainer>
        <ButtonContainer>
          <RectangularButton
            onPress={() => {
              confirmLogin();
            }}
            buttonStyle={buttonStyle}
            title="Login"
          />
        </ButtonContainer>
      </LoginForm>
    </SafeArea>
  );
};
