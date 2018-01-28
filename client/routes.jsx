import React, { Component, Fragment } from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import history from './history';
import { Home, NavBar } from './components';

export default class Routes extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <Router history={history}>
        <Fragment>
          <NavBar />
          <Switch>
            {/* <Route path="/test" component={NavBar} /> */}
            <Route component={Home} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
