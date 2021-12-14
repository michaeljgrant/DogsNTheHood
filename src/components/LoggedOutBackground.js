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
