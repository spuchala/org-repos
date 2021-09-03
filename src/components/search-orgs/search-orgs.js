import React, { useState } from "react";

import { TextField, Button } from "@material-ui/core";

import "./search-orgs.css";

const SearchOrgs = ({ onSearchOrgsClick, searchOrgQuery }) => {
  const [searchOrgQueryState, setSearchOrgQueryState] =
    useState(searchOrgQuery);

  return (
    <>
      <div className="searchContainer">
        <TextField
          value={searchOrgQueryState}
          className="searchInput"
          placeholder="Search Orgs"
          variant="outlined"
          inputProps={{
            maxLength: 100,
            "data-testid": "search-orgs-textinput"
          }}
          onChange={event => {
            setSearchOrgQueryState(event.target.value);
          }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => onSearchOrgsClick(searchOrgQueryState)}
        >
          Search
        </Button>
      </div>
    </>
  );
};

export default SearchOrgs;
