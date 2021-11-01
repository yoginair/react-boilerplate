import { shallow, render } from "enzyme";
import React from "react";
import TextField from ".";

describe("Text Field", () => {
  it("Renders default text field", () => {
    const wrapper = render(<TextField label="Label" />);
    expect(wrapper).toBeDefined();
  });
  it("Renders required text field", () => {
    const wrapper = render(<TextField label="Label" required={true} />);
    expect(wrapper).toBeDefined();
  });
  it("Renders error text field", () => {
    const wrapper = render(<TextField label="Label" error={true} />);
    expect(wrapper).toBeDefined();
  });
  it("Renders error with message text field", () => {
    const wrapper = render(
      <TextField label="Label" error={true} errorMessage="error message" />
    );
    expect(wrapper).toBeDefined();
  });
  it("Listens for changes", () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <TextField label="Label" onChange={mockFunction} />
    );
    wrapper.simulate("change");
    wrapper.update();
    expect(mockFunction).toBeCalled();
  });
});
