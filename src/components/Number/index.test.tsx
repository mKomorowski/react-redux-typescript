import React from "react";
import { render } from "@testing-library/react";

import Number from "./index";

describe("Number component", () => {
  it("renders correctly for '0'", () => {
    const { container } = render(<Number value={0} />);

    expect(container).toMatchSnapshot();
  });

  it("renders correctly for positive number", () => {
    const { container } = render(<Number value={1} />);

    expect(container).toMatchSnapshot();
  });

  it("renders correctly for negative number", () => {
    const { container } = render(<Number value={-1} />);

    expect(container).toMatchSnapshot();
  });
});
