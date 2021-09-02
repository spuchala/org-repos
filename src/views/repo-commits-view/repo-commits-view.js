import React from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import Typography from "@material-ui/core/Typography";

import RenderComponent from "../../components/render-component/render-component";
import CommitHistoryList from "../../components/commit-history-list/commit-history-list";
import repoRecentCommitsgraphQLQuery from "../../graphql-queries/repo-commits-graphql-query";
import "./repo-commits-view.css";

const RepoCommitsView = () => {
  const { org, repository } = useParams();

  const { data, loading, error } = useQuery(repoRecentCommitsgraphQLQuery, {
    variables: { owner: org, name: repository }
  });

  return (
    <>
      <Typography variant="h3">Repo Commits</Typography>
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
