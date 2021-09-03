import React from "react";

import { AppBar, Toolbar, Button } from "@material-ui/core";

const NavBar = () => {
  const handleTitleClick = () => {
    window.location = "/";
  };

  return (
    <AppBar position="static" style={{ alignItems: "center" }}>
      <Toolbar>
        <Button color="inherit" onClick={() => handleTitleClick()}>
          Org Repos
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
