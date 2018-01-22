import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Category = (props) => {
    const data = "isLoading";

    return (<li key={props.id}>{props.name}</li>);
}

Category.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Category;