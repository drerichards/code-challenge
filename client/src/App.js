import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './pages/01_Home';
import CategoryPage from './pages/02_Category';
import RestaurantPage from './pages/03_Restaurants';
import DetailPage from './pages/04_Detail';

const BasicExample = () => (
  <Router>
    <div>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/> */}

      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={CategoryPage}/>
      <Route path="/topics" component={RestaurantPage}/>
    </div>
  </Router>
)
export default BasicExample;