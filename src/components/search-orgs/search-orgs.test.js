import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import SearchOrgs from "./search-orgs";

describe("Search Orgs Componenet tests", () => {
  const props = {
    onSearchOrgsClick: jest.fn(),
    searchOrgQuery: ""
  };

  beforeEach(() => {
    render(<SearchOrgs {...props} />);
  });

  test("renders search orgs header", () => {
    const searchOrgsHeaderElement = screen.getByText(/Search/i);
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

  test("enter key should trigger search button click", () => {
    const searchOrgsButtonElement = screen.getByRole("button", {
      name: /Search/i
    });
    fireEvent.keyDown(searchOrgsButtonElement, {
      key: "Enter",
      code: "Enter"
    });
    // expect mock onSearchOrgsClick to be fired
    expect(props.onSearchOrgsClick).toHaveBeenCalled();
  });
});
