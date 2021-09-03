import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { TextField, Button } from "@material-ui/core";

import "./search-orgs.css";

// component to hold search org text and search button
const SearchOrgs = ({ onSearchOrgsClick, searchOrgQuery }) => {
  const [searchOrgQueryState, setSearchOrgQueryState] =
    useState(searchOrgQuery);

  // handle enter key press for search button
  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        onSearchOrgsClick(searchOrgQueryState);
      }
    };
    document.addEventListener("keydown", listener);
    // remove event listener on component unmount
    return () => {
      document.removeEventListener("keydown", listener);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchOrgQueryState]);

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

SearchOrgs.propTypes = {
  searchOrgQuery: PropTypes.string.isRequired,
  onSearchOrgsClick: PropTypes.func.isRequired
};

export default SearchOrgs;
