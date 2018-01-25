import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Restaurant from './Restaurant';

const Category = (props) => {
    const data = "isLoading";

    return (<li>{props.name}</li>);
}

Category.propTypes = {
    name: PropTypes.string.isRequired,
    restaurants: PropTypes.arrayOf(Restaurant)
    // onclick: PropTypes.func.isRequired
};

Category.defaultProps = {
    restaurants: [new Restaurant(),]
}

export default Category;