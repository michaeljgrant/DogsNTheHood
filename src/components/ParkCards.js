import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const ParksCard = styled(Card)`
  border-radius: 10px;
  box-shadow: -5px 10px 5px rgba(122, 122, 122, 0.3);
  margin-bottom: ${(props) => props.theme.space[4]};
`;

const ParksCardContent = styled(Card.Content)``;

const ParksCardPhoto = styled(Card.Cover)`
  border-radius: 10px;
`;
const ParkName = styled(Title)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;
const ParkAddress = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const ParkInfo = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Stars = <Ionicons name="star" size={10} color="yellow" />;
export const ParkCard = ({ Park = {} }) => {
  const {
    name = "Random Park",
    photos = [
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fpanorama-of-a-beautiful-city-park-picture-id625988512%3Fk%3D6%26m%3D625988512%26s%3D170667a%26w%3D0%26h%3DtRlxgxgGfNZajZ1zQejhHKKLcMnZJN4zrMydrawlPNQ%3D&f=1&nofb=1",
    ],
    address = "32 Wallaby Way",
  } = Park;

  return (
    <>
      <ParksCard>
        <ParksCardContent>
          <ParksCardPhoto key={name} source={{ uri: photos[0] }} />
          <ParkInfo>
            <ParkName>{name}</ParkName>
            {Stars}
            <ParkAddress>{address}</ParkAddress>
          </ParkInfo>
        </ParksCardContent>
      </ParksCard>
    </>
  );
};
