import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import moment from "moment";

import "./commit-history-list.css";

const CommitHistoryList = ({ commits }) => {
  return (
    <Paper className="commitHistoryListcontainer">
      <div className="titleCaptionContainer">
        <Typography variant="caption" display="block" gutterBottom>
          Showing most recent 10 commits
        </Typography>
      </div>
      <List>
        {commits.map(({ node }, index) => {
          const { author, committedDate, message } = node;
          return (
            <ListItem key={index} alignItems="flex-start" button>
              <ListItemText
                primary={author.name}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className="inline"
                      color="textPrimary"
                    >
                      {moment(committedDate).format("MMM D Y")}
                    </Typography>
                    <br />
                    {message}
                  </>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default CommitHistoryList;
