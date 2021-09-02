import { gql } from "@apollo/client";

const orgSearchGraphQLQuery = gql`
  query search($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
          }
        }
      }
    }
  }
`;

export default orgSearchGraphQLQuery;
