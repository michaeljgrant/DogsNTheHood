import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import { colors } from "../utils/theme/colors";
import { Searchbar } from "react-native-paper";
import MapView from "react-native-maps";
import styled from "styled-components/native";

const SearchBarContainer = styled(View)`
  padding: 16px;
  position: absolute;
  z-index: 999;
  top: 5px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const SafeArea = styled(SafeAreaView)`
  background-color: ${colors.brand.primary};
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;

const MapArea = styled(MapView)`
  width: 100%;
  height: 100%;
`;
export const MapPage = () => {
  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar icon="map" placeholder="Search" />
      </SearchBarContainer>
      <MapArea></MapArea>
    </SafeArea>
  );
};
