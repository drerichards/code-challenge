import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import './style.scss';


class Home extends Component {
	constructor(){
		super();
		this.state = {
			searchInput: ''
		};
		this.updateInput = this.updateInput.bind(this);
		this.search = this.search.bind(this);
	}

	updateInput(event) {
		event.preventDefault();
		let input = event.target.value;
		this.setState({searchInput: input});
	}

	search(event){
		event.preventDefault();
		console.log('searched function performed');
		this.props.history.push(`/search/${this.state.searchInput}`);
	}

	onPressEnter(event){
		event.preventDefault();
		event.stopPropagation();
		if(event.keyCode === 13){
			this.search();
		}
	}
	

	render() {
		return (
			<div className="page-container">
				<div className="content">
					<Logo/>
					<form
						className="search-form-home"
						onSubmit={this.search}>
						<input
							className="search-input-home"
							type="text"
							placeholder="Enter borough or zip"
							onChange={this.updateInput}
							// onKeyUp={this.onPressEnter}
						/>
						<button 
							className="search-button"
							type="submit">Send</button>
					</form>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	history: PropTypes.object 
};

export default Home;