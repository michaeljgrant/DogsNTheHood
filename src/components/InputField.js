import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { Colors } from "../utils/Colors";

export const InputField = ({ ...props }) => {
  return (
    <View style={styles(props.inputStyle).inputContainer}>
      <TextInput
        mode="outlined"
        label={props.label}
        style={styles(props.inputStyle)}
      />
    </View>
  );
};

const styles = (props) =>
  StyleSheet.create({
    inputStyling: {
      height: props.height,
      width: props.width,
      borderColor: props.borderColor,
      backgroundColor: "#fff",
      color: Colors.inputText,
    },
    inputContainer: {
      margin: 10,
      width: "80%",
    },
  });
