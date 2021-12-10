import React, { useState } from "react";
import styled from "styled-components/native";
import { SafeAreaView, Text, StatusBar } from "react-native";
import { Avatar } from "react-native-paper";
import { InputField } from "../components/InputField";
import { RectangularButton } from "../components/RectangularButton";

const UserName = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-top: 10px;
`;
const SafeArea = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors.brand.primary}
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;
const ProfileHeader = styled.View`
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;

const EditableArea = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.brand.test1};
  margin-left: ${(props) => props.theme.space[2]};
  margin-right: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[2]};
`;
export const ProfilePage = ({ ...props }) => {
  return (
    <SafeArea>
      <ProfileHeader>
        <Avatar.Image size={100} source={require("../../assets/Profile.jpg")} />
        <UserName>UserName</UserName>
      </ProfileHeader>
      <EditableArea>
        <Text>Placeholder</Text>
      </EditableArea>
    </SafeArea>
  );
};
