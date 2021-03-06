import React from "react";
import PropTypes from "prop-types";

import { Typography, CircularProgress } from "@material-ui/core";

import messages from "../../constants/messages";
import "./render-component.css";

// component to abstract away loading progress, any errors and display data if no errors
const RenderComponent = ({ loading, data, error, children }) => {
  const { errorMessage, noProjectsFoundInOrg } = messages;

  const isEmpty = data => {
    return data && data.length === 0;
  };

  if (loading) {
    return (
      <div className="progressContainer">
        <CircularProgress role="loader" />
      </div>
    );
  } else if (error) {
    return (
      <div className="errorMessageContainer">
        <Typography>{error.message ? error.message : errorMessage}</Typography>
      </div>
    );
  } else if (isEmpty(data)) {
    return (
      <div className="noDataMessageContainer">
        <Typography align="center">{noProjectsFoundInOrg}</Typography>
      </div>
    );
  }
  return <div>{children}</div>;
};

RenderComponent.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  data: PropTypes.array
};

export default RenderComponent;
