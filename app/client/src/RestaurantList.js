import React, { Component } from 'react';
import propTypes from 'prop-types';
import RestaurantCard from './RestaurantCard';
import { connect } from 'react-redux';
import APIManager from './APIManager';

import './RestaurantList.css';

const mapStateToProps = state => ({
  currentLocation: state.common.currentLocation,
  restaurants: state.common.restaurants
})

const mapDispatchToProps = dispatch => ({
  listRestaurants: (payload) =>
    dispatch({type: "ADD_RESTAURANTS", payload})
})

class RestaurantList extends Component {

  constructor(props){
  	super(props);
  	this.state = {};
    this.listRestaurants = this.listRestaurants.bind(this);
  }

  componentWillMount() {
    let {
      currentLocation,
      restaurants
    } = this.props;

    currentLocation && !restaurants ?
      this.props.listRestaurants(APIManager.Zomato.search(`search?entity_id=${currentLocation.id}&entity_type=city`)) :
      null
  }

  listRestaurants = () => (
    this.props.restaurants.map((r, index) => (
      <RestaurantCard key={r.restaurant.id} {...r.restaurant} />
    ))
  )

  render() {
    let restaurants;
    this.props.restaurants ?
    restaurants = this.listRestaurants() :
    null
    return (
      <div>
      {
        restaurants ? (
          <div className="container">
            <h1> Zomato API TEST </h1>
            <div className="row">
            {restaurants}
            </div>
          </div>
        ) : (
          <p> Loading...</p>
        )
      }
      </div>
    )
  }
}

RestaurantList.propTypes = {
  currentLocation: propTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
