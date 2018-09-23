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
    return (
      <Router>
        <Fragment>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton> */}
              <NavLink to="/">
                <Typography
                  variant="title"
                  color="inherit"
                  // className={classes.grow}
                >
                  Hacker News
                </Typography>
              </NavLink>
              {/* <Button color="inherit">Login</Button> */}
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
