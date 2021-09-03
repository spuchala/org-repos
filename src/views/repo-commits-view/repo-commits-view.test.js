import React from "react";
import routeData from "react-router";

import { fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import RepoCommitsView from "./repo-commits-view";
import renderWithMockApolloAndRouter from "../../test-helpers/render-with-mock-apollo-and-router";

describe("RepoCommits View tests", () => {
  test("renders repo commits view properly", () => {
    renderWithMockApolloAndRouter(<RepoCommitsView />);
    const headerElement = screen.getByText(/Repo Commits/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("makes a graphQL call to get repo recent commits", async () => {
    // mock on react router useParams hook to inject org, repo url params
    jest
      .spyOn(routeData, "useParams")
      .mockReturnValue({ org: "netflix", repository: "Hystrix" });

    renderWithMockApolloAndRouter(<RepoCommitsView />);

    // expect to have recent commits in the list from graphQL query
    await waitFor(() => {
      const testCommitedByUserElement = screen.getByText(/Test User1/i);
      expect(testCommitedByUserElement).toBeInTheDocument();
    });
  });

  test("takes user back to repo search page on click of backButton", async () => {
    // mock on react router useParams hook to inject org, repo url params
    jest
      .spyOn(routeData, "useParams")
      .mockReturnValue({ org: "netflix", repository: "Hystrix" });

    renderWithMockApolloAndRouter(<RepoCommitsView />);

    // expect to have recent commits in the list from graphQL query
    await waitFor(() => {
      const testCommitedByUserElement = screen.getByText(/Back/i);
      fireEvent.click(testCommitedByUserElement);
    });
  });
});
