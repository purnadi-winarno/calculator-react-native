import { shallow } from "enzyme";
import * as React from "react";
import Button from "../Button";

const setUpComponent = (props = {}) => shallow(<Button {...props} />);

describe("Testing button", () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    spy = jest.fn();
    const props = {
      text: "7",
      square: true,
      onPressHandler: spy
    };
    wrapper = setUpComponent(props);
  });

  it("renders square button correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders non square button correctly", () => {
    wrapper.setProps({ square: false });
    expect(wrapper).toMatchSnapshot();
  });

  it("check button action press handler", () => {
    wrapper
      .first()
      .props()
      .onPress();

    expect(spy).toBeCalled();
  });
});
