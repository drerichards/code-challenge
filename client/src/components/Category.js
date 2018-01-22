import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Category = (props) => {
    const data = "isLoading";

    return (<li>{props.name}</li>);
}

Category.propTypes = {
    name: PropTypes.string.isRequired,
    restaurants: PropTypes.arrayOf(Restaurant).isRequired
    // onclick: PropTypes.func.isRequired
};

export default Category;