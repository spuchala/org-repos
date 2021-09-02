import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useQuery } from "@apollo/client";
import Typography from "@material-ui/core/Typography";

import SearchOrgs from "../../components/search-orgs/search-orgs";
import RepoList from "../../components/repo-list/repo-list";
import RenderComponent from "../../components/render-component/render-component";

import orgSearchGraphQLQuery from "../../graphql-queries/org-search-graphql-query";

const OrgReposView = () => {
  const [searchOrgsQuery, setsearchOrgsQuery] = useState("");

  const { data, loading, error } = useQuery(orgSearchGraphQLQuery, {
    variables: { query: `org:${searchOrgsQuery}` },
    skip: searchOrgsQuery === ""
  });

  const routeHistory = useHistory();

  const handleSearchOrgsClick = searchInput => {
    setsearchOrgsQuery(searchInput);
  };

  const handleRepoClick = repo => {
    routeHistory.push({ pathname: `/${searchOrgsQuery}/${repo}/commits` });
  };

  return (
    <>
      <Typography variant="h3">Search Org Repos</Typography>
      <SearchOrgs
        onSearchOrgsClick={searchInput => handleSearchOrgsClick(searchInput)}
      />
      <RenderComponent
        data={data?.search?.edges}
        loading={loading}
        error={error}
      >
        {data && (
          <RepoList
            repos={data?.search?.edges}
            repositoryCount={data?.search?.repositoryCount}
            onRepoClick={repo => handleRepoClick(repo)}
          />
        )}
      </RenderComponent>
    </>
  );
};

export default OrgReposView;
