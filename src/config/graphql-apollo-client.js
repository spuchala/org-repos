import ApolloClient, { InMemoryCache } from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: "Bearer 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"
      }
    });
  }
});
export default apolloClient;
