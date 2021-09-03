import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";

import "./repo-list.css";

const RepoList = ({ repos, repositoryCount, onRepoClick }) => {
  return (
    <Paper className="repoListcontainer">
      <div className="titleCaptionContainer">
        <Typography variant="h6" gutterBottom>
          {`${repositoryCount} repos`}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Showing top 10 repos
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Click on the repo to view latest commits
        </Typography>
      </div>
      <List>
        {repos.map(({ node }, index) => {
          return (
            <ListItem
              role="repo-list-item"
              key={index}
              button
              onClick={() => onRepoClick(node.name)}
            >
              <ListItemText primary={node.name} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments" disableRipple>
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default RepoList;
