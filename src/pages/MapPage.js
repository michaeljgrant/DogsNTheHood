import React, { useContext, useState, useEffect } from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import { colors } from "../utils/theme/colors";
import { Searchbar } from "react-native-paper";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { ParkMapCallout } from "../components/ParkMapCallout";
import { LocationContext } from "../service/LocationContext";
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
export const MapPage = ({ navigation }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar
          icon="map"
          placeholder="Search"
          value={searchKeyword}
          onSubmitEditing={() => {
            searchKeyword;
          }}
          onChangeText={(text) => {
            setSearchKeyword(text);
          }}
        />
      </SearchBarContainer>
      <MapArea
        region={{
          latitude: "",
          longitude: "",
          latitudeDelta: "",
          longitudeDelta: 0.02,
        }}
      >
        {dogParks.map((park) => {
          return (
            <MapView.Marker
              key={park.name}
              title={park.name}
              coordinate={{
                latitude: park.geometry.location.lat,
                longitude: park.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("MapDetail", {
                    park,
                  })
                }
              >
                <ParkMapCallout park={park} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </MapArea>
    </SafeArea>
  );
};
