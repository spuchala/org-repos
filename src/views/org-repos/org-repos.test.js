import React from "react";

import { screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import OrgRepos from "./org-repos";
import renderWithMockApolloAndRouter from "../../test-helpers/render-with-mock-apollo-and-router";
import mockOrgRepos from "../../test-helpers/mock-data/mock-org-repos";

describe("OrgRepos View tests", () => {
  beforeEach(() => {
    renderWithMockApolloAndRouter(<OrgRepos />);
  });

  test("renders org repos view properly", () => {
    const headerElement = screen.getByText(/Search Org Repos/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("handles user search of an org and displays org search results", async () => {
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

    // expect to have org search results
    await waitFor(() => {
      const repoCountElement = screen.getByText(
        `${mockOrgRepos.data.search.repositoryCount} repos`
      );
      expect(repoCountElement).toBeInTheDocument();
    });
  });
});
