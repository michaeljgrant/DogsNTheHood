import React from "react";
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { ParkCard } from "../components/ParkCards";

const SearchBarContainer = styled.View`
  margin: 8px 8px 5px 8px;
  justify-content: center;
  align-items: center;
`;
const SearchBar = styled(Searchbar)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const SafeArea = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors.brand.primary}
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;
const ParkList = styled.View`
  background-color: ${(props) => props.theme.colors.brand.test1};
  flex: 1;
  margin-top: ${(props) => props.theme.space[2]};
  margin-left: ${(props) => props.theme.space[2]};
  margin-right: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[3]};
`;

export const Homepage = () => {
  return (
    <SafeArea>
      <SearchBarContainer>
        <SearchBar placeholder="Search" />
      </SearchBarContainer>
      <ParkList>
        <FlatList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
          renderItem={() => <ParkCard />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </ParkList>
    </SafeArea>
  );
};
