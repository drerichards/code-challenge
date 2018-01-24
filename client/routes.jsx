import React, { Component, Fragment } from "react";
import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";
import history from "./history";
import { Home } from './Components';

export default class Routes extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <Router history={history}>
        <Fragment>
          {/* <NavBar /> */}
          <Switch>
            <Route component={Home} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
