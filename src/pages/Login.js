import React from "react";
import { Colors } from "../utils/Colors";
import { View, Text } from "react-native";
import { RectangularButton } from "../components/RectangularButton";

export const Login = () => {
  const buttonStyle = {
    height: 50,
    width: 50,
    backgroundColor: Colors.buttonConfirm,
  };
  confirmLogin = () => {
    console.log("this button works");
  };
  return (
    <View>
      <Text>Login Placeholder</Text>
      <RectangularButton
        onPress={confirmLogin}
        buttonStyle={buttonStyle}
        title="Login"
      />
    </View>
  );
};
