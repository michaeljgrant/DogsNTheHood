import React from "react";
import { StatusBar, SafeAreaView, View, Text } from "react-native";
import { colors } from "../utils/theme/colors";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
const SearchBarContainer = styled(View)`
  padding: 16px;
`;
const SafeArea = styled(SafeAreaView)`
  background-color: ${colors.brand.secondary};
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
  margin: 25px;
  justify-content: center;
  align-items: center;
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
