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
