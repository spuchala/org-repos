import React from "react";

import { Switch, Route } from "react-router-dom";

import OrgRepos from "../views/org-repos/org-repos";

const Routes = () => {
  return (
    <Switch>
      <Route Path="/">
        <OrgRepos />
      </Route>
      <Route Path={`/:repository?/commits`}>
        <OrgRepos />
      </Route>
    </Switch>
  );
};

export default Routes;
