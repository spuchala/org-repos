import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RenderComponent from "./render-component";
import messages from "../../constants/messages";
import mockOrgRepos from "../../test-helpers/mock-data/mock-org-repos";
import RepoList from "../../components/repo-list/repo-list";

describe("Render Component tests", () => {
  const repoListProps = {
    repos: mockOrgRepos.data.search.edges,
    repositoryCount: mockOrgRepos.data.search.repositoryCount,
    onRepoClick: jest.fn()
  };

  test("RenderComponent to show circular progress on fetching data", () => {
    render(<RenderComponent loading={true} />);
    const progressLoaderElement = screen.getByRole("loader");
    expect(progressLoaderElement).toBeInTheDocument();
  });

  test("RenderComponent to display default error message on error", () => {
    render(<RenderComponent error={true} />);

    const { errorMessage } = messages;
    const errorElement = screen.getByText(errorMessage);

    expect(errorElement).toBeInTheDocument();
  });

  test("RenderComponent to display custom error message on error", () => {
    const customErrorMessageToBeDisplayed = "un authorized";
    render(
      <RenderComponent error={{ message: customErrorMessageToBeDisplayed }} />
    );
    const errorElement = screen.getByText(customErrorMessageToBeDisplayed);

    expect(errorElement).toBeInTheDocument();
  });

  test("RenderComponent to display component data on no error", () => {
    render(
      <RenderComponent data={mockOrgRepos.data.search.edges}>
        <RepoList {...repoListProps} />
      </RenderComponent>
    );
    const hysterixItemElement = screen.getByText(/Hystrix/i);
    expect(hysterixItemElement).toBeInTheDocument();
  });

  test("RenderComponent to display no data message when no error and component data is empty", () => {
    render(<RenderComponent data={[]} />);

    const { noProjectsFoundInOrg } = messages;
    const noDataElement = screen.getByText(noProjectsFoundInOrg);
    expect(noDataElement).toBeInTheDocument();
  });
});
