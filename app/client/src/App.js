import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import APIManager from './APIManager';
import {connect} from 'react-redux';
import RestaurantList from './RestaurantList';
import Restaurant from './Restaurant';

import './App.css';

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  getCurrentLocation: (payload) =>
    dispatch({type: "ADD_CURRENT_LOCATION", payload})
})


class App extends Component {

  componentWillMount() {

    navigator.geolocation.getCurrentPosition((pos) => {
      let latitude  = pos.coords.latitude;
      let longitude = pos.coords.longitude;
      let url = `cities?lat=${latitude}&lon=${longitude}`;
      this.props.getCurrentLocation(APIManager.Zomato.search(url));
    })
  }


  render() {
    let {
      loading
    } = this.props.common;
    return (
      <div>
      {
        loading ? (
          <p> Loading... </p>
        ) :
        <div>
          <Switch>
            <Route exact path='/' component={RestaurantList} />
            <Route path='/restaurant/:id' component={Restaurant} />
          </Switch>
        </div>
      }
      </div>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
