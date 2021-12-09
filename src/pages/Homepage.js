import React from "react";
import { StatusBar, SafeAreaView, View, Text } from "react-native";
import { colors } from "../utils/theme/colors";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const SearchBarContainer = styled(View)`
  padding: 16;
  height: 100vh;
  width: 80%;
  justify-content: center;
  align-items: center;
`;
const SearchBar = styled(Searchbar)`
  align-items: center;
  justify-content: center;
`;
const SafeArea = styled(SafeAreaView)`
  background-color: ${colors.brand.secondary};
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const Homepage = () => {
  return (
    <SafeArea>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <Text>Placeholder</Text>
    </SafeArea>
  );
};
