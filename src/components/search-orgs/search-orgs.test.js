import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import SearchOrgs from "./search-orgs";

describe("Search Orgs Componenet tests", () => {
  const props = {
    onSearchOrgsClick: jest.fn()
  };

  beforeEach(() => {
    render(<SearchOrgs {...props} />);
  });

  test("renders search orgs header", () => {
    const searchOrgsHeaderElement = screen.getByText(/Search Org Repos/i);
    expect(searchOrgsHeaderElement).toBeInTheDocument();
  });

  test("onSearchOrgsClick to be fired on search orgs button click", () => {
    const searchOrgsTextInputElement = screen.getByTestId(
      "search-orgs-textinput"
    );
    const searchOrgsButtonElement = screen.getByRole("button", {
      name: /Search/i
    });

    // type in search orgs text input
    fireEvent.change(searchOrgsTextInputElement, {
      target: { value: "netflix" }
    });

    // click search orgs button
    fireEvent.click(searchOrgsButtonElement);

    // expect mock onSearchOrgsClick to be fired
    expect(props.onSearchOrgsClick).toHaveBeenCalled();
  });
});
