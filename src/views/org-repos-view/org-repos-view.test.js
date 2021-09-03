import React from "react";

import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import OrgReposView from "./org-repos-view";
import renderWithMockApolloAndRouter from "../../test-helpers/render-with-mock-apollo-and-router";
//import mockOrgRepos from "../../test-helpers/mock-data/mock-org-repos";

describe("OrgRepos View tests", () => {
  beforeEach(() => {
    renderWithMockApolloAndRouter(<OrgReposView />);
  });

  test("renders org repos view properly", () => {
    const headerElement = screen.getByText(/Search Org Repos/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("redirects user org search to org/repositories url", async () => {
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

    const headerElement = screen.getByText(/Search Org Repos/i);
    expect(headerElement).toBeInTheDocument();
  });
});
