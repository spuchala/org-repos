import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import Typography from "@material-ui/core/Typography";

import SearchOrgs from "../../components/search-orgs/search-orgs";
import RepoList from "../../components/repo-list/repo-list";
import RenderComponent from "../../components/render-component/render-component";

import orgSearchGraphQLQuery from "../../graphql-queries/org-search-graphql-query";

const OrgReposView = () => {
  const routeHistory = useHistory();

  // fetch org that user is searching for from url params
  const { org } = useParams();

  const { data, loading, error } = useQuery(orgSearchGraphQLQuery, {
    variables: { query: `org:${org}` },
    // if org is null or empty skip the graphQL call
    // it will be empty on initial load of app
    skip: !org || org === ""
  });

  const handleSearchOrgsClick = org => {
    // redirect search request to "app/{org}/repositories"
    // please refer to routes-config file in config folder for all routes
    routeHistory.push({ pathname: `/${org}/repositories` });
  };

  const handleRepoClick = repo => {
    // redirect to "app/{org}/{repo}/commits" to get recent commits for the repo in org
    // please refer to routes-config file in config folder for all routes
    routeHistory.push({ pathname: `/${org}/${repo}/commits` });
  };

  return (
    <>
      <Typography variant="h3">Search Org Repos</Typography>
      <SearchOrgs
        searchOrgQuery={org ?? ""}
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
