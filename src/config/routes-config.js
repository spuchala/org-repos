import React from "react";

import { Switch, Route } from "react-router-dom";

import OrgReposView from "../views/org-repos-view/org-repos-view";
import RepoCommitsView from "../views/repo-commits-view/repo-commits-view";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <OrgReposView />
      </Route>
      <Route path="/:org/:repository/commits">
        <RepoCommitsView />
      </Route>
    </Switch>
  );
};

export default Routes;
