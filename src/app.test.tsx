import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "./app";

describe("App", function() {
  it("should display App", function() {
    const { getByText } = render(<App />);
    expect(getByText("My React Boilerplate")).toBeInTheDocument();
  });
});
