import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCard.css';

class RestaurantCard extends Component {
  render(){
    const {name, featured_image, location} = this.props;
    const generic_image = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43d2818abd122c626a47a12ae53ca481&auto=format&fit=crop&w=1350&q=80'
    return (

      <div className="restaurant-card">
        <Link  to={`/restaurant/${this.props.id}`} className="preview-link">

        <div className="restaurant-card-img">
          <img src={featured_image ? featured_image : generic_image } alt={name} />
        </div>
        <div className="restaurant-card-content">
          <h3 className="restaurant-card-title">{name}</h3>
          <h4>Address</h4>
          <p>{location.address}</p>
        </div>
        </Link>
      </div>
    )
  }
}

export default RestaurantCard;
