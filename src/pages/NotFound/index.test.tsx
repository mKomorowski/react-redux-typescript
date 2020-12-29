import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import NotFound from "./index";

describe("NotFound component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Router>
        <NotFound />
      </Router>,
    );

    expect(container).toMatchSnapshot();
  });
});
