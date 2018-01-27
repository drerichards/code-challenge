import React from 'react';
import PropTypes from 'prop-types';

class Restaurant extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      data: [],
    }

    this.address = this.props.location.address;
  }

  componentDidMount() {
    this.setState({
      data: <li onClick={this.toggleMoreInfo}>{this.props.name}</li>
    })
  }

  toggleMoreInfo(e) {
    e.preventDefault();
    console.log("this should show more info")
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
  // city: PropTypes.string.isRequired,
  // address: PropTypes.string.isRequired,
  price_range: PropTypes.number.isRequired,
  average_cost_for_two: PropTypes.number.isRequired,
  user_rating: PropTypes.object.isRequired,
  has_online_delivery: PropTypes.number.isRequired,
  is_delivering_now: PropTypes.number.isRequired,
}

export default Restaurant;