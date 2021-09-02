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
