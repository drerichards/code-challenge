import React from 'react';
import PropTypes from 'prop-types';

class Restaurant extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      isLoaded: false,
      showExpanded: false,
      data: [],
    }
    this.minimalContent = null;
    this.expandedContent = null;
    this.showExpanded = false;
    this.address = this.props.location.address;
    this.initialize = this.initialize.bind(this);
    this.toggleMoreInfo = this.toggleMoreInfo.bind(this);

    this.initialize();
  }

  componentDidMount() {
    this.setState({
      data: this.showExpanded ? this.expandedContent : this.minimalContent,
      isLoaded: true
    })
  }

  initialize() {
    this.minimalContent = <li>{this.props.name}</li>;
    this.expandedContent = 
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.location.address}</li>
        <li>{this.props.url}</li>
        <li>{this.props.is_delivering_now ? 'GET FOOD NOW!' : 'Sry :( Not Right Now'}</li>
        <li></li>
      </ul>
  }

  toggleMoreInfo(e) {
    e.preventDefault();
    console.log("this should show more info")
    this.setState({
      showExpanded : !this.showExpanded
    })
  }

  render() {
    const content = this.state.isLoading 
        ? 'Loading...' 
        : this.state.data;
    return (
      <ul onClick={this.toggleMoreInfo}>
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