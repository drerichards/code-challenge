import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Restaurant from './Restaurant';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    }
    this.name = props.name || "Loading...";
  }

  // getRestaurants() {
  //   console.log('Getting restaurants...');
  // }

  render() {
    return (<li>{this.name}</li>);
  }
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  restaurants: PropTypes.arrayOf(Restaurant)
};

Category.defaultProps = {
    restaurants: []
}

export default Category;