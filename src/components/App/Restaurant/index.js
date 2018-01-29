import React, { Component } from 'react';
import RestaurantReview from './RestaurantReview';
import RestaurantInfo from './RestaurantInfo';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import ReactSVG from 'react-svg';
import 'whatwg-fetch';
import './style.scss';
import { 
	options, 
	REVIEWS_URL, 
	RESTAURANT_URL 
} from '../../../restaurantAPI';


class Restuarant extends Component {
	constructor(){
		super();
		this.state ={
			info: {},
			reviews: []
		};
	}

	checkRepsonse(response){
		if(response.ok){
			return response.json();
		} else {
			return Promise.reject({
				status: response.status,
				statusText: response.statusText
			});
		}
	}
	componentDidMount(){
		let param = this.props.match.params.id;

		fetch(RESTAURANT_URL + param, options )
			.then(this.checkRepsonse)
			.then( data => {
				console.log('data is', data);
				this.setState({info: data});
				return fetch(REVIEWS_URL + param, options );
			})
			.then(this.checkRepsonse)
			.then( data => {
				console.log(data);
				this.setState({reviews: data.user_reviews});
			})
			.catch( error => {
				if( error.status === 404 ){
					console.log('error:', error.statusText);
				}
			});
	}

	render() {
		if( !this.state.info.location || 
			!this.state.info.user_rating
		){
			return <Loader/>;
		} else {
			return (
				<div className="page-container">
					<div className="burger-medium">
						<ReactSVG
							path="../img/burger_2.svg"
						/>
					</div>
					<RestaurantInfo info={this.state.info}/>
					<RestaurantReview reviews={this.state.reviews}/>
				</div>
			);
		}
	}
}

Restuarant.propTypes = {
	match: PropTypes.object 
};


export default Restuarant;