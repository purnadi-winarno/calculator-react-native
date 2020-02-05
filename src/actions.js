export const onPressButton = text => {
  switch (text) {
    case "C":
      return {
        type: "CLEAR_STACK"
      };
    case "=":
      return {
        type: "CALCULATE"
      };
    default:
      return {
        type: "ADD_STACK",
        payload: text
      };
  }
};
