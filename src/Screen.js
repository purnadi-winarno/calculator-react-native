import React, { useCallback } from "react";
import { View, Text } from "react-native";
import Button from "./Button";
import styles from "./styles";
import { connect } from "react-redux";
import { NUMBERS, SIGNS } from "./constants";
import { onPressButton } from "./actions";

const Screen = ({ stack, onPressButton }) => {
  const onButtonPress = useCallback(text => onPressButton(text), []);
  function _renderNumbers() {
    return NUMBERS.map((numberRow, index) => (
      <View style={styles.numberRow} key={`row-${index}`}>
        {numberRow.map(number => (
          <Button
            text={number}
            square
            key={`button-${number}`}
            onPressHandler={onButtonPress}
          />
        ))}
      </View>
    ));
  }
  function _rendersSigns() {
    return SIGNS.map(sign => (
      <Button
        text={sign}
        key={`button-${sign}`}
        onPressHandler={onButtonPress}
      />
    ));
  }
  const lastNumber = stack
    .slice()
    .reverse()
    .find(s => /^(-)*\d+[.]*\d*$/.test(s));
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>{lastNumber}</Text>
        <Text style={styles.smallText}>
          {stack.length > 1 && stack.join("")}
        </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.numberButtonContainer}>{_renderNumbers()}</View>
        <View style={styles.signButtonContainer}>{_rendersSigns()}</View>
      </View>
    </View>
  );
};
const mapStateToProps = state => ({
  stack: state.calculator.stack
});
const mapDispatchToProps = {
  onPressButton
};
export default connect(mapStateToProps, mapDispatchToProps)(Screen);
