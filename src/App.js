import React, { Component, Fragment } from "react";
import Router from "react-router-dom/BrowserRouter";
import NavLink from "react-router-dom/NavLink";
import { AnimatedSwitch } from "react-router-transition";
import Route from "react-router-dom/Route";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Home from "./Screens/Home";
import Story from "./Screens/Story";

class App extends Component {
  render() {
    const titleLink = props => <NavLink to="/" {...props} />;

    return (
      <Router>
        <Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="title"
                align="center"
                component={titleLink}
                style={{
                  color: "white",
                }}
              >
                Hacker News
              </Typography>
            </Toolbar>
          </AppBar>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Home} />
            <Route path="/:articleId/comments/" component={Story} />
          </AnimatedSwitch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
