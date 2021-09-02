import React, { useState } from "react";

import SearchOrgs from "../../components/search-orgs/search-orgs";
import RepoList from "../../components/repo-list/repo-list";
import RenderComponent from "../../components/render-component/render-component";
import { useQuery } from "@apollo/client";
import orgSearchGraphQLQuery from "../../graphql-queries/org-search-graphql-query";

const OrgRepos = () => {
  const [searchOrgsQuery, setsearchOrgsQuery] = useState("");

  const { data, loading, error } = useQuery(orgSearchGraphQLQuery, {
    variables: { query: `org:${searchOrgsQuery}` },
    skip: searchOrgsQuery === ""
  });
  const handleSearchOrgsClick = searchInput => {
    setsearchOrgsQuery(searchInput);
  };

  const handleRepoClick = project => {
    console.log(project);
  };

  return (
    <>
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

export default OrgRepos;
