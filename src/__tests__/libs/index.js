import { createStore } from "redux";
import rootReducer from "../../reducer"; //this

export const testStore = initialState => {
  return createStore(rootReducer, initialState);
};
