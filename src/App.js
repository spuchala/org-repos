import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import "@fontsource/roboto";

import Routes from "./config/routes-config";
import apolloClient from "./config/graphql-apollo-client";
import "./App.css";
import NavBar from "./components/nav-bar/nav-bar";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <ApolloProvider client={apolloClient}>
          <Router>
            <Routes />
          </Router>
        </ApolloProvider>
      </div>
    </>
  );
}

export default App;
