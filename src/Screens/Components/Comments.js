import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const Comments = props => {
  const date = new Date(props.time * 1000);
  return (
    <Fragment>
      <List>
        <ListItem>
          {props.deleted ? (
            <ListItemText primary="This comment was deleted" />
          ) : (
            <ListItemText
              primary={
                <div dangerouslySetInnerHTML={{ __html: props.comment }} />
              }
              secondary={
                <span>
                  <span>{`Comment by: ${props.author.charAt(0).toUpperCase() +
                    props.author.slice(1)} `}</span>
                  <br />
                  <span>{date.toDateString()}</span>
                </span>
              }
            />
          )}
        </ListItem>
      </List>

      <Divider />
    </Fragment>
  );
};

const styles = theme => ({
  divider: {
    marginLeft: "50px",
    marginRight: "50px",
  },
});

Comments.prototype = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.string,
};

export default withStyles(styles)(Comments);
