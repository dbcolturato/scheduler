import React from "react";
import { render } from "@testing-library/react";

import Application from "components/Application";
import Appointment from "components/Appointment";

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Application />);
  });
  it("renders without crashing", () => {
    render(<Appointment />);
  });
});
