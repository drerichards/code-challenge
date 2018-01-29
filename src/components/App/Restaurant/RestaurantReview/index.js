import React, { Component } from 'react';
import PropTypes from 'prop-types';


class RestaurantReview extends Component {
	constructor(){
		super();
		this.state ={
			isTitle: false
		};
	}

	render() {

		return (
			<div className="container" style={{borderTop: '1px solid #cecece'}}>
				<h2>Reviews</h2>{
					this.props.reviews.map( (element, id) => {

						let reviewer = element.review.user.name;
						let reviewTitle = element.review.rating_text;
						let reviewText = element.review.review_text;
						let isTitle = true;

						if(reviewTitle === 'Not rated'){
							reviewTitle = '';
							isTitle = false;
						}
						return (
							<div key={id} className="review">
								<div className="review-heading">
									<span className="reviewer">{reviewer}</span>
									<span className={(isTitle ? 'review-title':'')}>{reviewTitle}</span>
								</div>
								<span className="review-text">{reviewText}</span>
							</div>
						);
					})

				}
			</div>
		);
	}
}

RestaurantReview.propTypes = {
	reviews: PropTypes.array
};


export default RestaurantReview;