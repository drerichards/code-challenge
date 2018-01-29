import RestaurantListItem from './RestaurantListItem';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RestaurantList extends Component {
	constructor(){
		super();
	}
	render() {
		return (
			<div className="restaurant-list">
				{ 
					this.props.restaurants.map((item,id) => {
						return (
							<RestaurantListItem key={id} restaurant={item.restaurant}/>						
						);
					})
				}
			</div>
		);
	}
}

RestaurantList.propTypes = {
	restaurants: PropTypes.array
};

export default RestaurantList;