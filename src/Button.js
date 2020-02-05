import React from "react";
import { View, TouchableNativeFeedback, Text } from "react-native";
import styles from "./styles";

const Button = ({ text, square, onPressHandler }) => {
  console.log("button rendered");
  const buttonStyle = square ? styles.squareButton : styles.rectangleButton;
  return (
    <TouchableNativeFeedback onPress={() => onPressHandler(text)}>
      <View style={[styles.button, buttonStyle]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default React.memo(Button);
