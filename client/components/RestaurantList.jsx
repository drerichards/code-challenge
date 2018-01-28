import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

const RestaurantList = props => (
  <div className="container">
    {props.restaurants.restaurantList && props.restaurants.restaurantList.map((el) => {
      const restaurant = el.restaurant;
      return (
        <div className="restaurant-list">
          <div className="restaurant-list-thumb">
            <img src={restaurant.featured_image} alt="broken" />
          </div>
          <div className="restaurant-list-description">
            <p className="title">{restaurant.name}</p>
            <p><strong>Cuisines: </strong>{restaurant.cuisines}</p>
            <p>{restaurant.location.address}</p>
            <p><strong>Locality: </strong>{restaurant.location.locality}</p>
          </div>
        </div>
      );
    })}
  </div>
);

const mapState = ({ restaurants }) => ({ restaurants });
const mapDispatch = {};
export default connect(mapState, mapDispatch)(RestaurantList);
