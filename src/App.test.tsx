import React from "react";
import "@testing-library/jest-dom";
import { render, within } from "@testing-library/react";
import App from "./App";

describe("App", function() {
  it("should display App", function() {
    const { getByText } = render(<App />);
    expect(getByText("My React Boilerplate")).toBeInTheDocument();
  });
});
