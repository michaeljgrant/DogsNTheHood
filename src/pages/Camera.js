import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, TouchableOpacity } from "react-native";

import { LoginContext } from "../service/LoginContext";

const ProfileAvatarCam = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const InnerPhoto = styled.View`
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const CameraPopUp = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(LoginContext);

  const takePhoto = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <Text>App has not been given permission to access your camera.</Text>
    );
  }
  return (
    <ProfileAvatarCam
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
    >
      <TouchableOpacity onPress={takePhoto}>
        <InnerPhoto />
      </TouchableOpacity>
    </ProfileAvatarCam>
  );
};
