import React from 'react';
import PropTYpes from 'prop-types';

const Restaurant = (props) => {
  const isLoading = true;
  const data = [];
  const content = isLoading 
    ? 'Loading...' 
    : data;

  return(data);
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