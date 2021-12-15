import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../utils/theme/colors";

export const AccountBack = styled.ImageBackground.attrs({
  source: require("../../assets/backgroundimage.jpeg"),
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const AccountBackOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(162, 162, 162, 0.3);
`;

export const AccountNavContainer = styled.View`
  background-color: ${(props) => props.theme.colors.brand.primary}aa;
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  border-radius: 10px;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.secondary,
})`
  padding: ${(props) => props.theme.space[2]};
  border-radius: 10px;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
  border-radius: 10px;
`;

export const SpaceBetween = styled.View`
  padding: 15px;
`;
export const LoginForm = styled.View`
  background-color: ${(props) => props.theme.colors.brand.primary}aa;
  flex: 1;
  width: 80%;
  height: 80%;
  padding: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 10px;
`;
export const TitleContainer = styled.View`
  flex: 0.2;
  align-items: center;
  justify-content: center;
`;
export const InputContainer = styled.View`
  flex: 0.5;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ButtonContainer = styled.View`
  flex: 0.2;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
export const Header = styled.Text`
  color: ${(props) => props.theme.colors.brand.secondary};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-family: ${(props) => props.theme.fonts.heading};
`;
export const ErrorSpacer = styled.View`
  height: 10px;
  justify-content: center;
  align-items: center;
`;
export const ErrorMsg = styled.Text`
  color: ${(props) => props.theme.colors.ui.cancel};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;
