import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RenderComponent from "./render-component";
import messages from "../../constants/messages";

describe("Render Component tests", () => {
  test("RenderComponent to show circular progress on fetching data", () => {
    render(<RenderComponent loading={true} />);
    const progressLoaderElement = screen.getByRole("loader");
    expect(progressLoaderElement).toBeInTheDocument();
  });

  test("RenderComponent to display error message on error", () => {
    render(<RenderComponent error={true} />);

    const { errorMessage } = messages;
    const errorElement = screen.getByText(errorMessage);

    expect(errorElement).toBeInTheDocument();
  });
});
