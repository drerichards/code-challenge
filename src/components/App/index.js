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
	render() {
		return (
			<BrowserRouter>
				<Switch>
				
					<Route exact path='/' component={ Home }/>
					<Route exact path='/search/l' component={ SearchResults }/>
					<Route exact path='/restaurant/:id' component= { Restaurant }/>	
			
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;