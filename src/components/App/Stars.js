import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';


class Stars extends Component {

	renderStars(rating){
		
		if(rating == 0){
			return <div>Not Rated</div>;
		}

		//Round number to the nearest half
		let rounded = Math.round(parseFloat(rating) * 2) /2;

		//create an array of "star" elements base the the rounded rating
		let stars = [];
		for(let i = 1; i < 6; i++ ){
			let star = '../img/full-star.svg';
			
			if( i > rounded ){
				if( i - rounded === 0.5 ){
					star = '../img/half-star.svg';
				} else {
					star = '../img/grey-star.svg';
				}
			}
			stars.push(
				<ReactSVG
					key={i}
					path={star}
					className="burger"
				/>
			);
		}

		return stars;
	}

	render() {
		return (
			<div>
				<div className="item-stars">{ this.renderStars(this.props.rating) }</div>
			</div>
		);
	}
}

Stars.propTypes = {
	rating: PropTypes.string
};
export default Stars;