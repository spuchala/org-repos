import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/roboto";

import App from "./App";
import apolloClient from "./config/graphql-apollo-client";
import "./index.css";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
