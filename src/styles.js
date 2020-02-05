import { StyleSheet } from "react-native";
const BUTTON_SPACING = 10;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  inputBox: {
    flex: 1,
    padding: BUTTON_SPACING,
    justifyContent: "flex-end"
  },
  inputText: {
    fontSize: 60,
    textAlign: "right"
  },
  resultText: {
    fontSize: 20,
    textAlign: "right"
  },
  row: {
    flexDirection: "row"
  },
  numberButtonContainer: {
    flex: 0.8,
    padding: BUTTON_SPACING / 2,
    paddingRight: 0
  },
  numberRow: {
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  signButtonContainer: {
    flex: 0.3,
    padding: BUTTON_SPACING / 2,
    paddingLeft: 0,
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: "#eee",
    borderRadius: 5,
    margin: BUTTON_SPACING / 2
  },
  squareButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  rectangleButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  buttonText: {
    fontSize: 24
  }
});
