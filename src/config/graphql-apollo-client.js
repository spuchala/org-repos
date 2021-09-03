import ApolloClient, { InMemoryCache } from "apollo-boost";

const apolloClient = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  request: async operation => {
    operation.setContext({
      headers: {
        authorization: "Bearer Personal_Access_Token_goes_here"
      }
    });
  }
});
export default apolloClient;
