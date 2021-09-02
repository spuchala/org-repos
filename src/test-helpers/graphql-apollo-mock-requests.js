import mockOrgRepos from "./mock-data/mock-org-repos";
import mockRepoCommits from "./mock-data/mock-repo-commits";

import orgSearchGraphQLQuery from "../graphql-queries/org-search-graphql-query";
import repoRecentCommitsgraphQLQuery from "../graphql-queries/repo-commits-graphql-query";

const apolloMockRequests = [
  {
    request: {
      operationName: "Search Orgs",
      query: orgSearchGraphQLQuery,
      variables: { query: "org:netflix" }
    },
    result: mockOrgRepos
  },
  {
    request: {
      operationName: "Get Repo Commits",
      query: repoRecentCommitsgraphQLQuery,
      variables: { owner: "netflix", name: "Hystrix" }
    },
    result: mockRepoCommits
  }
];

export default apolloMockRequests;
