import React, { Fragment } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";

const StoryBox = ({ title, url, comments, score, classes, author, time }) => {
  const date = new Date(time * 1000);
  return (
    <Fragment>
      <List>
        <ListItem>
          <ListItemText
            // style={{ textAlign: "left", marginLeft: "10%" }}
            primary={title}
            secondary={url}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`Article by: ${author.charAt(0).toUpperCase() +
              author.slice(1)}`}
            secondary={date.toDateString()}
          />
        </ListItem>
        <ListItem>
          <ListItemText secondary={`Comments: ${comments} Score: ${score}`} />
        </ListItem>
      </List>
      <Divider className={classes.divider} />
    </Fragment>
  );
};

const styles = theme => ({
  divider: {
    marginLeft: "50px",
    marginRight: "50px",
  },
});

StoryBox.prototype = {
  title: PropTypes.string,
  url: PropTypes.string,
  descendants: PropTypes.string,
  score: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StoryBox);
