import React, { Component, Fragment } from 'react';
import { Router } from 'react-router';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import history from './history';
import { NavBar, RestaurantList, SingleRestaurantView } from './components';
import { locationThunk } from './redux';

class Routes extends Component {
  componentDidMount() {
    this.props.locationThunk();
  }
  render() {
    return (
      <Router history={history}>
        <Fragment>
          <NavBar />
          <Switch>
            <Route path="/restaurant/:id" component={SingleRestaurantView} />
            {/* <Route component={Home} /> */}
            <Route component={RestaurantList} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

const mapState = null;
const mapDispatch = { locationThunk };
export default connect(mapState, mapDispatch)(Routes);
