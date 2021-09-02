import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import RepoList from "./repo-list";

import mockOrgRepos from "../../test-helpers/mock-data/mock-org-repos";

describe("ProjectList Component tests", () => {
  const props = {
    repos: mockOrgRepos.data.search.edges,
    repositoryCount: mockOrgRepos.data.search.repositoryCount,
    onRepoClick: jest.fn()
  };

  beforeEach(() => {
    render(<RepoList {...props} />);
  });

  test("renders org projects in a list", () => {
    const hysterixItemElement = screen.getByText(/Hystrix/i);
    expect(hysterixItemElement).toBeInTheDocument();
  });

  test("onRepoClick to be fired on a repo click", () => {
    const hysterixItemElement = screen.getByText(/Hystrix/i);

    // click the hysterix repo element
    fireEvent.click(hysterixItemElement);

    // expect mock onRepoClick to be fired
    expect(props.onRepoClick).toHaveBeenCalled();
  });
});
