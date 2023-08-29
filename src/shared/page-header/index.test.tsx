import React from "react";
import { render, screen } from "@testing-library/react";

import PageHeader from ".";

describe("<PageHeader />", () => {
  it("renders component correctly", () => {
    render(<PageHeader />);

    const label = screen.getByText("할 일 목록");
    expect(label).toBeInTheDocument();
  });
});
