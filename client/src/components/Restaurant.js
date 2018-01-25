import React from 'react';
import PropTypes from 'prop-types';

class Restaurant extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    }
    this.isLoading = true;
    this.data = [];
  }

  render() {
    const content = this.state.isLoading 
        ? 'Loading...' 
        : this.state.data;
    return (
      <ul>
        { content }
      </ul>
    )
  }
}

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  price_range: PropTypes.string.isRequired,
  average_cost_for_two: PropTypes.string.isRequired,
  user_rating: PropTypes.string.isRequired,
  has_online_delivery: PropTypes.string.isRequired,
  is_delivering_now: PropTypes.string.isRequired,
}

export default Restaurant;