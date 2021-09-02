import mockOrgRepos from "./mock-data/mock-org-repos";

import orgSearchGraphQLQuery from "../graphql-queries/org-search-graphql-query";

const apolloMockRequests = [
  {
    request: {
      operationName: "Search Orgs",
      query: orgSearchGraphQLQuery,
      variables: { query: "org:netflix" }
    },
    result: mockOrgRepos
  }
];

export default apolloMockRequests;
