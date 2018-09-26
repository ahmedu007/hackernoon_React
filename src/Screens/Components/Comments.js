import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Comments = props => {
  const date = new Date(props.time * 1000);
  const { classes } = props;
  return (
    <Fragment>
      <Card className={classes.card} raised>
        {props.deleted ? (
          <CardContent>
            <Typography variant="headline" component="h1">
              This comment was deleted
            </Typography>
          </CardContent>
        ) : (
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              <span>{`Comment by: ${props.author.charAt(0).toUpperCase() +
                props.author.slice(1)} `}</span>
            </Typography>
            <Typography variant="headline" component="h1">
              <div
                dangerouslySetInnerHTML={{ __html: props.comment }}
                style={{ fontSize: "1rem" }}
              />
            </Typography>
            <Typography
              className={classes.pos}
              color="textSecondary"
              component="p"
            >
              {date.toDateString()}
            </Typography>
          </CardContent>
        )}
      </Card>

      <Divider />
    </Fragment>
  );
};

const styles = theme => ({
  divider: {
    marginLeft: "50px",
    marginRight: "50px",
  },
  card: {
    minWidth: 275,
    marginBottom: 25,
    marginTop: 25,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

Comments.prototype = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.string,
};

export default withStyles(styles)(Comments);
