const mockRepoCommits = {
  data: {
    repository: {
      defaultBranchRef: {
        target: {
          history: {
            edges: [
              {
                node: {
                  author: { name: "Test User1", __typename: "GitActor" },
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "David Liu", __typename: "GitActor" },
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "David Liu", __typename: "GitActor" },
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "Tim Bozarth", __typename: "GitActor" },
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "Christoph Seibert", __typename: "GitActor" },
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "Christoph Seibert", __typename: "GitActor" },
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "David Robert Duke", __typename: "GitActor" },
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "Christoph Seibert", __typename: "GitActor" },
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "Tim Bozarth", __typename: "GitActor" },
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "Christoph Seibert", __typename: "GitActor" },
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              }
            ],
            __typename: "CommitHistoryConnection"
          },
          __typename: "Commit"
        },
        __typename: "Ref"
      },
      __typename: "Repository"
    }
  }
};

export default mockRepoCommits;
