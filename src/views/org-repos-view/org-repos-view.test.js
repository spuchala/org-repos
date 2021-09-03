import React from "react";
import routeData from "react-router";

import { screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import OrgReposView from "./org-repos-view";
import renderWithMockApolloAndRouter from "../../test-helpers/render-with-mock-apollo-and-router";
import mockOrgRepos from "../../test-helpers/mock-data/mock-org-repos";

describe("OrgRepos View tests", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  test("renders org repos view properly", () => {
    renderWithMockApolloAndRouter(<OrgReposView />);
    const headerElement = screen.getByText(/Search Org Repos/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("redirects user to org/repositories url when a search for a repo is requested", async () => {
    renderWithMockApolloAndRouter(<OrgReposView />);
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

  test("when user is redirected to search org url, graphQL request gets the org repos", async () => {
    // enter the app with search repo url: example: http://localhost:3000/facebook/repositories
    // mock on react router useParams hook to inject org url param
    jest.spyOn(routeData, "useParams").mockReturnValue({ org: "netflix" });

    renderWithMockApolloAndRouter(<OrgReposView />);

    await waitFor(() => {
      const repoCountElement = screen.getByText(
        `${mockOrgRepos.data.search.repositoryCount} repos`
      );
      expect(repoCountElement).toBeInTheDocument();
    });
  });

  test("redirects the user to recent commits page org/repo/commits when user clicks on a repo", async () => {
    // enter the app with search repo url: example: http://localhost:3000/facebook/repositories
    // mock on react router useParams hook to inject org url param
    jest.spyOn(routeData, "useParams").mockReturnValue({ org: "netflix" });

    renderWithMockApolloAndRouter(<OrgReposView />);

    await waitFor(() => {
      const orgReposList = screen.getAllByRole("repo-list-item");
      fireEvent.click(orgReposList[0]);
    });
  });
});
