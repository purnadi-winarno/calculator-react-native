import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const Button = ({ text, square, onPressHandler }) => {
  //console.log("button rendered"); //ensure it's not re-rendered when parent's props changes
  const buttonStyle = square ? styles.squareButton : styles.rectangleButton;
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={() => onPressHandler(text)}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
