import React from "react";
import Screen from "./src/Screen";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./src/reducer";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
}
