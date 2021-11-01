import { shallow, render } from "enzyme";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from ".";

describe("Icon Button", () => {
  it("Renders Primary Button", () => {
    const wrapper = render(<IconButton icon={<DeleteIcon />} />);
    expect(wrapper).toBeDefined();
  });
  it("Renders Disabled Button", () => {
    const wrapper = render(<IconButton icon={<DeleteIcon />} disabled />);
    expect(wrapper).toBeDefined();
  });
  it("Handles button click", () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <IconButton icon={<DeleteIcon />} onClick={mockFunction} />
    );
    wrapper.simulate("click");
    wrapper.update();
    expect(mockFunction).toBeCalled();
  });
});
