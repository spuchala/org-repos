import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

import renderWithMockApolloAndRouter from "./test-helpers/render-with-mock-apollo-and-router";

test("renders search orgs application", () => {
  renderWithMockApolloAndRouter(<App />);
  const appHeaderElement = screen.getByText(/Search Org Repos/i);
  expect(appHeaderElement).toBeInTheDocument();
});
