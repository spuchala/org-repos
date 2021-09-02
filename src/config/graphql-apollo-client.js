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
