import React from 'react';
import PropTypes from 'prop-types';

import Page from './Page';

class RestaurantListPage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {

    // };
    this.cuisineType = this.props.name;
    this.stuff = this.props.history.location.state.obj;
  }

  render() {
    return(
      // <Page name={this.cuisineType} content={this.state.restaurants} />
      <Page name={this.cuisineType} />
    )
  }
}

export default RestaurantListPage;
