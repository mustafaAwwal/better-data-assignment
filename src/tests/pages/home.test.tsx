import React from "react";
import Home from "../../pages";
import { render } from "../../test-utils";

const setup = () => {
  render(<Home />);
};

describe("<Home />", () => {
  it("should render without error", () => {
    setup();
  });
});
