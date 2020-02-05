import { combineReducers } from "redux";
const INITIAL_STATE = {
  stack: ["0"]
};
function addStack(stack, payload) {
  let lastStack = stack[stack.length - 1];
  if (
    (stack.length === 1 && lastStack === "0" && payload === "-") ||
    (lastStack === "0" && isNumber(payload)) ||
    (isSign(lastStack) && isSign(payload))
  )
    stack[stack.length - 1] = payload;
  else if (
    (isSign(lastStack) && isNumber(payload)) ||
    (isNumber(lastStack) && isSign(payload))
  )
    stack = [...stack, payload];
  else if (
    (isNumber(lastStack) && isNumber(payload)) ||
    (isNumber(lastStack) && !lastStack.includes(".") && payload === ".")
  )
    stack[stack.length - 1] = lastStack + payload;
  return [...stack];
}
const isNumber = str => /^\d+[.]*\d*$/.test(str);
const isSign = str => /[\/\*+-]/.test(str);
const calculate = stack => {
  try {
    const fn = stack.join("");
    return [new Function("return " + fn)()];
  } catch (e) {
    return stack;
  }
};
const stackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_STACK":
      return {
        ...state,
        stack: addStack(state.stack, action.payload)
      };
    case "CLEAR_STACK":
      return {
        ...state,
        stack: ["0"]
      };
    case "CALCULATE": {
      return {
        ...state,
        stack: calculate(state.stack)
      };
    }
    default:
      return state;
  }
};
export default combineReducers({
  calculator: stackReducer
});
