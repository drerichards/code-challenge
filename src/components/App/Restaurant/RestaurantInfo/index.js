import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stars from '../../Stars';


class RestaurantInfo extends Component {
	render() {

		return (
			<div className="container">
				<h1>{this.props.info.name}</h1>
				<h3>{this.props.info.location.address}</h3>
				<Stars rating={this.props.info.user_rating.aggregate_rating}/>
			</div>
		);
	}
}

RestaurantInfo.propTypes = {
	info: PropTypes.object
};

export default RestaurantInfo;