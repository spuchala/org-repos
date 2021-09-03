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
