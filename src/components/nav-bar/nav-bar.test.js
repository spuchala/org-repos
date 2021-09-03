import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import NavBar from "./nav-bar";

describe("NavBar Component tests", () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  test("renders nav bar", () => {
    const appHeaderElement = screen.getByText(/Org Repos/i);
    expect(appHeaderElement).toBeInTheDocument();
  });

  test("onTitleClick to be fired on a header click", () => {
    const appHeaderElement = screen.getByText(/Org Repos/i);

    // click the header element
    fireEvent.click(appHeaderElement);

    // expect header to be in the new route
    expect(appHeaderElement).toBeInTheDocument();
  });
});
