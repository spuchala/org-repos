import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { Typography, Button } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import RenderComponent from "../../components/render-component/render-component";
import CommitHistoryList from "../../components/commit-history-list/commit-history-list";
import repoRecentCommitsgraphQLQuery from "../../graphql-queries/repo-commits-graphql-query";
import "./repo-commits-view.css";

// page to view repo commits
const RepoCommitsView = () => {
  const { org, repository } = useParams();
  const routeHistory = useHistory();

  const { data, loading, error } = useQuery(repoRecentCommitsgraphQLQuery, {
    variables: { owner: org, name: repository }
  });

  return (
    <>
      <Typography variant="h5">Repo Commits</Typography>
      {data && (
        <div className="backContainer">
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<KeyboardBackspaceIcon />}
            onClick={() => routeHistory.goBack()}
          >
            Back
          </Button>
        </div>
      )}
      <RenderComponent
        data={data?.repository?.defaultBranchRef?.target?.history?.edges}
        loading={loading}
        error={error}
      >
        {data && (
          <div className="repoCommitsContainer">
            <CommitHistoryList
              commits={
                data?.repository?.defaultBranchRef?.target?.history?.edges
              }
            />
          </div>
        )}
      </RenderComponent>
    </>
  );
};

export default RepoCommitsView;
