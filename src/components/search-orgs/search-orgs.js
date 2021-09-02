import React, { useState } from "react";

import { TextField, Button } from "@material-ui/core";

import "./search-orgs.css";

const SearchOrgs = ({ onSearchOrgsClick }) => {
  const [searchOrgQuery, setSearchOrgQuery] = useState("");

  return (
    <>
      <div className="searchContainer">
        <TextField
          value={searchOrgQuery}
          className="searchInput"
          placeholder="Search Orgs"
          variant="outlined"
          inputProps={{
            maxLength: 100,
            "data-testid": "search-orgs-textinput"
          }}
          onChange={event => {
            setSearchOrgQuery(event.target.value);
          }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => onSearchOrgsClick(searchOrgQuery)}
        >
          Search
        </Button>
      </div>
    </>
  );
};

export default SearchOrgs;
