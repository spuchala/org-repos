import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import Routes from "./config/routes-config";
import apolloClient from "./config/graphql-apollo-client";
import "./App.css";
import "@fontsource/roboto";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={apolloClient}>
        <Router>
          <Routes />
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
