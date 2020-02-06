import { shallow } from "enzyme";
import * as React from "react";
import Screen from "../Screen";
import { testStore } from "./libs";

const setUpComponent = (initialState = {}) => {
  const store = testStore(initialState);
  return shallow(<Screen store={store} />);
};

describe("Testing screen", () => {
  let wrapper;
  //let spy;

  beforeEach(() => {
    // spy = jest.fn();
    const initialState = {
      calculator: {
        stack: ["0"]
      }
    };
    wrapper = setUpComponent(initialState);
  });

  it("renders calculator screen correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
