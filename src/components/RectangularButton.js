import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const RectangularButton = ({ ...props }) => {
  return (
    <TouchableOpacity style={styles(props.buttonStyle)} onPress={props.onPress}>
      <Text>{props.title}</Text>
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
      alignItems: "center",
      justifyContent: "center",
    },
  });
