import React from "react";

import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RepoCommits from "./repo-commits";
import renderWithMockApolloAndRouter from "../../test-helpers/render-with-mock-apollo-and-router";

describe("RepoCommits View tests", () => {
  beforeEach(() => {
    renderWithMockApolloAndRouter(<RepoCommits />);
  });

  test("renders repo commits view properly", () => {
    const headerElement = screen.getByText(/Repo Commits/i);
    expect(headerElement).toBeInTheDocument();
  });
});
