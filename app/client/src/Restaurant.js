import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import APIManager from './APIManager';
import './Restaurant.css';

const RestaurantView = props => (
  <div className="row">
    <div className="col-md-3">
      <Link to="/">
          <button className="btn btn-warning">
            Restaurant List
          </button>
      </Link>
      <p>User rating: {props.user_rating.aggregate_rating} <br/>
         Votes: {props.user_rating.votes} <br/>
         Quality: {props.user_rating.rating_text}
      </p>
      <p>
        Average Cost for 2 peopele:
        {props.currency}{props.average_cost_for_two}
      </p>
    </div>
    <div className="col-md-9">
      <div className="thumbnail">
        <img className="img-response" src={props.featured_image ? props.featured_image : props.generic_image } alt={props.name} />
        <div className="caption-full">
            <h4> {props.name} </h4>
            <p>{props.location.address}</p>
        </div>
      </div>

      <div className="well">
        {props.reviews}
      </div>

    </div>
  </div>
)

const mapStateToProps = state => ({
  restaurant: state.common.restaurant,
  reviews : state.common.reviews
});

const mapDispatchToProps = dispatch => ({
  getRestaurant: (payload) =>
    dispatch({type: "ADD_SINGLE_RESTAURANT", payload}),
  getReviews: (payload) =>
    dispatch({type: "ADD_REVIEWS", payload}),
  onUnload: () =>
    dispatch({type: "REMOVE_RESTAURANT"})
});

class Restaurant extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
    this.renderReviews = this.renderReviews.bind(this);
  }

  componentWillMount() {

    !this.props.restaurant ? this.props.getRestaurant(APIManager.Zomato.search(`restaurant?res_id=${this.props.match.params.id}`)) :
    null

    !this.props.reviews ? this.props.getReviews(APIManager.Zomato.search(`reviews?res_id=${this.props.match.params.id}`)) :
    null
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  renderReviews = () => {
    let reviews = this.props.reviews.map((r, index) => {
      return (
        <div key={r.review.id} className="row">
            <div className="col-md-12">
              <strong>{r.review.user.name}</strong>
              <div className="thumbnail">
                <img className="img-response" style={{width: 50, height:50}} src={r.review.user.profile_image} alt={r.review.user.name} />
              </div>
              <span className="pull-right"> {r.review.review_time_friendly}</span>
              <p>{r.review.review_text}</p>
            </div>
        </div>
      )
    })

    return reviews;
  }

  render() {
      let restaurant, reviews;
      this.props.restaurant ?
      restaurant = this.props.restaurant :
      null
      this.props.reviews ?
      reviews = this.props.reviews :
      null
      const generic_image = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43d2818abd122c626a47a12ae53ca481&auto=format&fit=crop&w=1350&q=80'
      return (
          <div className="container">
            <br />
            {
            restaurant && reviews ? (
              <RestaurantView {...restaurant} reviews={this.renderReviews()} generic_image={generic_image}/>
              ) :
              <div>
              Loading...
              </div>
            }
          </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
