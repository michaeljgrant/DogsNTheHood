import React from "react";
import { StatusBar, SafeAreaView, View, Dimensions } from "react-native";
import { colors } from "../utils/theme/colors";
import { Searchbar } from "react-native-paper";
import MapView from "react-native-maps";
import styled from "styled-components/native";
const SearchBarContainer = styled(View)`
  padding: 16px;
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
        <Searchbar placeholder="Search" />
      </SearchBarContainer>
      <View>
        <MapArea></MapArea>
      </View>
    </SafeArea>
  );
};
