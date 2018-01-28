import React, { Component, Fragment } from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import history from './history';
import { Home, NavBar, RestaurantList, SingleRestaurantView } from './components';

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
            <Route path="/test" component={RestaurantList} />
            <Route path="/restaurant/:id" component={SingleRestaurantView} />
            <Route component={Home} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
