import React, { Component } from "react";
import Router from "react-router-dom/BrowserRouter";
import { AnimatedSwitch } from "react-router-transition";
import Route from "react-router-dom/Route";

import Home from "./Screens/Home";
import Story from "./Screens/Story";

class App extends Component {
  render() {
    return (
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Home} />
          <Route path="/:articleId/comments/" component={Story} />
        </AnimatedSwitch>
      </Router>
    );
  }
}

export default App;
