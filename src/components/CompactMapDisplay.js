import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const iPhoneView = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const AndroidView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const PopUpContainer = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const ParkName = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.title};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const isAndroid = Platform.OS === "android";

export const ParkViewPopUp = ({ park, isMap }) => {
  const ImageDisplay = isAndroid && isMap ? AndroidView : iPhoneView;
  return (
    <PopUpContainer>
      <ImageDisplay source={{ uri: null }} />
      <ParkName>{park}</ParkName>
    </PopUpContainer>
  );
};
