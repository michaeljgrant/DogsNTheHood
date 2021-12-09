import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/theme/colors";

export const InputField = ({ ...props }) => {
  return (
    <View style={styles(props.inputStyle, colors).inputContainer}>
      <TextInput
        mode="outlined"
        label={props.label}
        style={styles(props.inputStyle, colors)}
      />
    </View>
  );
};

const styles = (props, colors) =>
  StyleSheet.create({
    inputStyling: {
      height: props.height,
      width: props.width,
      borderColor: props.borderColor,
      backgroundColor: "#fff",
      color: colors.ui.secondary,
    },
    inputContainer: {
      margin: 10,
      width: "80%",
    },
  });
