import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { singleRestaurantThunk, reviewsThunk } from '../redux';

class SingleRestaurantView extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.singleRestaurantThunk(id);
    this.props.reviewsThunk(id)
  }
  render() {
    const restaurant = this.props.restaurants.restaurant
    return (
      <div className="container">
        <p className="title">{restaurant.name && restaurant.name}</p>
        <img src={restaurant.name && restaurant.featured_image} alt="broken" />
        <p><strong>Cuisines: </strong>{restaurant.name && restaurant.cuisines}</p>
        <p>{restaurant.name && restaurant.location.address}</p>
        <p><strong>Locality: </strong>{restaurant.name && restaurant.location.locality}</p>
        <p className="title">Reviews</p>
        {this.props.reviews && this.props.reviews.map((el) => {
          const reviews = el.review;
          return (
            <div className="reviews">
              <div className="reviews-image">
                <img src={reviews.user.profile_image} alt="broken" />
              </div>
              <div className="reviews-content">
                <p className="title">{reviews.user.name}</p>
                <p>{reviews.review_text}</p>
                <p>{reviews.review_time_friendly}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}


const mapState = ({ restaurants, reviews }) => ({ restaurants, reviews });
const mapDispatch = { singleRestaurantThunk, reviewsThunk };
export default connect(mapState, mapDispatch)(SingleRestaurantView);
