import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
          const { author } = node;
          return (
            <ListItem key={index} button>
              <ListItemText primary={author.name} />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default CommitHistoryList;
