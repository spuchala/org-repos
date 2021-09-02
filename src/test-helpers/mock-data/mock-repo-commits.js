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
                  committedDate: "2018-11-19T22:20:36Z",
                  message:
                    "Merge pull request #1904 from Netflix/qiangdavidliu-update-hystrix-status\n\nUpdate official Netflix Hystrix Status",
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "David Liu", __typename: "GitActor" },
                  committedDate: "2018-11-19T22:19:00Z",
                  message: "Update OSSMETADATA",
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "David Liu", __typename: "GitActor" },
                  committedDate: "2018-11-19T22:18:19Z",
                  message: "Update README.md",
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "Tim Bozarth", __typename: "GitActor" },
                  committedDate: "2018-05-04T22:36:18Z",
                  message:
                    "Merge pull request #1797 from MenschNestor/master\n\nStabilize yet another test",
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "Christoph Seibert", __typename: "GitActor" },
                  committedDate: "2018-04-27T07:30:29Z",
                  message:
                    "Again: Only check for thread isolation if the command had a chance to start executing",
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "Christoph Seibert", __typename: "GitActor" },
                  committedDate: "2018-04-27T07:04:52Z",
                  message: "Merge remote-tracking branch 'upstream/master'",
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "David Robert Duke", __typename: "GitActor" },
                  committedDate: "2018-04-26T19:39:17Z",
                  message:
                    "Merge pull request #1757 from erichhsun/sse-sample-servlet-race-condition\n\nFix race condition in HystrixSampleSseServlet for response writes",
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "Christoph Seibert", __typename: "GitActor" },
                  committedDate: "2018-04-25T15:41:47Z",
                  message:
                    "Only check for thread isolation if the command had a chance to start executing",
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "Tim Bozarth", __typename: "GitActor" },
                  committedDate: "2018-04-24T18:00:27Z",
                  message:
                    "Merge pull request #1786 from MenschNestor/master\n\nStabilize another test",
                  __typename: "Commit"
                },
                __typename: "CommitEdge"
              },
              {
                node: {
                  author: { name: "Christoph Seibert", __typename: "GitActor" },
                  committedDate: "2018-04-09T06:46:49Z",
                  message:
                    "Run command runnables on a single thread executor to get deterministic results",
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
