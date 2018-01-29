import React, { Component } from 'react';
import Stars from '../../Stars';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class RestaurantListItem extends Component {
	constructor(){
		super();
		this.state = {
			
		};
	}

	renderDollars(range){
		let dollars = '';
		for(let i = 0; i < range; i++ ){
			dollars += '$';
		}
		return <div>{dollars}</div>;
	}

	render() {
		let r = this.props.restaurant;
		let name = r.name;
		let location  = r.location.address;
		let price = r.price_range;
		let rating = r.user_rating.aggregate_rating;
		return (
			<div className="restaurant-item">
				<div className="item-title-link">
					<Link to={`/restaurant/${r.id}`}>{ name }</Link>
				</div>
				<div className="item-address">{ location }</div>
				<div className="item-price">{ this.renderDollars(price) }</div>
				{/* <div className="item-stars">{ this.renderStars(rating) }</div> */}
				<Stars rating={rating}/>
			</div>
		);
	}
}

RestaurantListItem.propTypes = {
	restaurant: PropTypes.object
};

export default RestaurantListItem;