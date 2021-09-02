import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CommitHistoryList from "./commit-history-list";

import mockRepoCommits from "../../test-helpers/mock-data/mock-repo-commits";

describe("CommitHistoryList Component tests", () => {
  const props = {
    commits:
      mockRepoCommits.data.repository.defaultBranchRef.target.history.edges
  };

  beforeEach(() => {
    render(<CommitHistoryList {...props} />);
  });

  test("renders repo commits in a list", () => {
    const userElement = screen.getByText(/Test User1/i);
    expect(userElement).toBeInTheDocument();
  });
});
