import React, { useContext, useState, useCallback } from "react";
import styled from "styled-components/native";
import { Avatar } from "react-native-paper";
import { StatusBar, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import {
  AuthButton,
  ButtonContainer,
} from "../components/AccountScreensTemplates";
import { LoginContext } from "../service/LoginContext";

const UserName = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-top: 10px;
`;
const SafeArea = styled.SafeAreaView`
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

export const Settings = ({ navigation }) => {
  const { onLogout, user } = useContext(LoginContext);
  const [photo, setPhoto] = useState(null);

  const getProfileAvatar = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfileAvatar(user);
    }, [user])
  );
  return (
    <SafeArea>
      <ProfileHeader>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon size={100} icon="human" backgroundColour="#CAE9FF" />
          )}
          {photo && (
            <Avatar.Image
              size={100}
              source={{ uri: photo }}
              backgroundColour="#CAE9FF"
            />
          )}
        </TouchableOpacity>
        <UserName>{user.email}</UserName>
      </ProfileHeader>
      <EditableArea>
        <ButtonContainer>
          <AuthButton icon="door" mode="contained" onPress={onLogout}>
            Logout
          </AuthButton>
        </ButtonContainer>
      </EditableArea>
    </SafeArea>
  );
};
