import React from "react";

import { Switch, Route } from "react-router-dom";

import OrgRepos from "../views/org-repos/org-repos";

const Routes = () => {
  return (
    <Switch>
      <Route Path="/">
        <OrgRepos />
      </Route>
    </Switch>
  );
};

export default Routes;
