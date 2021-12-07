import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const RectangularButton = ({ ...props }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles(props.buttonStyle).buttonStyling}
      onPress={props.onPress}
    >
      <Text style={styles(props.buttonStyle).text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (props) =>
  StyleSheet.create({
    buttonStyling: {
      height: props.height,
      width: props.width,
      backgroundColor: props.backgroundColor,
      borderColor: "#000000",
      borderWidth: 2,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: props.fontSize,
      textAlign: "center",
    },
  });
