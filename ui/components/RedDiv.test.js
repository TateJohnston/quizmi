import { render } from "@testing-library/react";
import React from "react";
import RedDiv from "./redDiv";

test("Home page rendering correctly", () => {
  const { container } = render(<RedDiv />);
  expect(container).toMatchSnapshot();
});
