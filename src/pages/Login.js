import React, { useState } from "react";
import { Colors } from "../utils/Colors";
import { fontSizes } from "../utils/Sizes";
import { View, Text, StyleSheet } from "react-native";
import { InputField } from "../components/InputField";
import { RectangularButton } from "../components/RectangularButton";

export const Login = ({ login }) => {
  const buttonStyle = {
    height: "65%",
    width: "80%",
    backgroundColor: Colors.buttonConfirm,
    fontSize: fontSizes.xxLrg,
  };
  const inputStyle = {
    height: 100,
    width: 250,
    borderColor: Colors.borderColor,
  };
  const confirmLogin = () => {
    login(true);
  };
  return (
    <View style={styles.form}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <InputField inputStyle={inputStyle} label={"Username"} />
        <InputField inputStyle={inputStyle} label={"Password"} />
        <InputField inputStyle={inputStyle} label={"Confirm Password"} />
      </View>
      <View style={styles.buttonContainer}>
        <RectangularButton
          onPress={() => {
            confirmLogin();
          }}
          buttonStyle={buttonStyle}
          title="Login"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: Colors.formBackground,
    flex: 1,
    width: "80%",
    height: "80%",
    padding: 50,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 10,
  },
  title: {
    fontSize: fontSizes.xxLrg,
    color: Colors.titleText,
  },
  titleContainer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
});
