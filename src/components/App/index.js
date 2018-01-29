import React, { Component } from 'react';
import Home from './Home';
import Restaurant from './Restaurant';
import SearchResults from './SearchResults';

import { 
	Route, 
	Switch, 
	BrowserRouter 
} from 'react-router-dom';


class App extends Component {
	constructor(){
		super();
		this.state = {
			results: {}
		};
	}

	getSearchResults( data ) {
		this.setState({results: data});
	}

	SearchComponent(props){
		return (
			<SearchResults 
				getSearchResults={this.getSearchResults.bind(this)}
				{...props}
			/>
		);
	}

	RestaurantComponent(props){
		return (
			<Restaurant
				info={ this.state.results }
				{...props}
			/>
		);
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={ Home }/>
					<Route exact path='/search/:locality' render={ this.SearchComponent.bind(this) }/>
					<Route exact path='/restaurant/:id' render= { this.RestaurantComponent.bind(this) }/>	
				</Switch>
			</BrowserRouter>
		);
	}
}



export default App;