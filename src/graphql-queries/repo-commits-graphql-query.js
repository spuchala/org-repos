import { gql } from "@apollo/client";

const repoRecentCommitsgraphQLQuery = gql`
  query search($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      defaultBranchRef {
        target {
          ... on Commit {
            history(first: 10) {
              edges {
                node {
                  ... on Commit {
                    author {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default repoRecentCommitsgraphQLQuery;
