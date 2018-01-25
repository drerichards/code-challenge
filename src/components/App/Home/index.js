import React, { Component } from 'react';

class Home extends Component {
	constructor(){
		super();
		this.state = {
			searchInput: ''
		};
	}

	updateInput(event) {
		event.prevenDefault();
		let input = event.target.value;
		this.setState({searchInput: input});
	}

	search(event){
		event.prevenDefault();
	}
	

	render() {
		return (
			<div>
				<form action="">
					<input 
						type="text"
						onChange={this.updateInput}/>
				</form>
				<button 
					type="submit"
					onClick={this.send}
				><Link to={`${this.props.match.url}/footwear`}></Link>
				</button>
			</div>
		);
	}
}

export default Home;