import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "../../../themes";
import React from "react";
import { render } from "enzyme";

import AddEvent from ".";

describe("Add Event", () => {
  it("Renders the Add Event", () => {
    const wrapper = render(
      <ThemeProvider theme={baseTheme}>
        <AddEvent />
      </ThemeProvider>
    );
    expect(wrapper).toBeDefined();
  });
});
