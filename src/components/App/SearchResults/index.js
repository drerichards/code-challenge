import RestaurantList from './RestaurantList';
import {options, SEARCH_URL} from '../../../restaurantAPI';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import Loader from '../Loader';
import 'whatwg-fetch';
import './style.scss';
import ReactSVG from 'react-svg';


class SearchResults extends Component {
	constructor(){
		super();
		this.state = {
			results: {}
		};
		this.getResults = this.getResults.bind(this);
	}

	componentDidMount(){
		this.getResults();
	}

	getResults(){

		let param = this.props.match.params.locality;

		fetch(SEARCH_URL + param, options)
			.then( response => {
				if(response.ok) {
					return response.json();
				} else {
					return Promise.reject({
						status: response.status,
						statusText: response.statusText
					});
				}
			})
			.then(data => {
				console.log('data is', data);
				this.setState({results: data});
				this.props.getSearchResults(data);
			})
			.catch(error => {
				if (error.status === 404){
					console.log('error:', error.statusText);
				}
			});
	}

	render() {
		var restaurants = this.state.results.restaurants;
		if( !restaurants ){
			return (
				<Loader/>
			);
		}
		if(restaurants && restaurants.length == 0){
			return(
				<div className="page-container">
					<div className="logo center">
						<h1>Oops! No Bugers! Try agiain.</h1>
					</div>
				</div>
			);
		}
		else
			return (
				<div className="page-container">
					<div className="burger-medium">
						<ReactSVG
							path="../img/burger_2.svg"
						/>
					</div>
					<Filter/>
					<RestaurantList restaurants={restaurants}/>
				</div>
			);
		
	}
}

SearchResults.propTypes = {
	match: PropTypes.object ,
	getSearchResults: PropTypes.func
};

export default SearchResults;