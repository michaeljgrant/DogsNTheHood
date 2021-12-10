import React from "react";
import { StatusBar, SafeAreaView, View, Text } from "react-native";
import { colors } from "../utils/theme/colors";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
const SearchBarContainer = styled(View)`
  padding: 16px;
`;
const SafeArea = styled(SafeAreaView)`
  background-color: ${colors.brand.primary};
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;
export const MapPage = () => {
  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar placeholder="Search" />
      </SearchBarContainer>
      <Text style={{ padding: 16 }}>Placeholder</Text>
    </SafeArea>
  );
};
