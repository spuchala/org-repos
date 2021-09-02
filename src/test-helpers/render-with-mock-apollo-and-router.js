import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import apolloMockRequests from "../test-helpers/graphql-apollo-mock-requests";

const history = createMemoryHistory();

const renderWithMockApolloAndRouter = component => {
  return {
    ...render(
      <MockedProvider mocks={apolloMockRequests}>
        <Router history={history}>{component}</Router>
      </MockedProvider>
    )
  };
};

export default renderWithMockApolloAndRouter;
