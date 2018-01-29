import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './pages/01_Home';
import CategoryPage from './pages/02_CuisineDisplay';
import RestaurantPage from './pages/03_RestaurantDisplay';
import DetailPage from './pages/04_RestaurantDetailDisplay';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/cuisines" component={CategoryPage}/>
      <Route exact path="/cuisines/:categoryName" component={RestaurantPage}/>
      <Route exact path="/cuisines/:categoryName/:rest_name" component={DetailPage}/>
    </div>
  </Router>
)
export default App;