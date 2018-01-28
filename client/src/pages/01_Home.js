import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route, Link } from 'react-router-dom';
import CategoryPage from './02_Category';

const Home = props => (
  <div className="app">
    <div className="page__background page__home">
      <div className="page__title title__home">
        Zomato!! <br/> The App! 
      </div>
      <div className="page__slogan slogan___home">
        Hungry 
        <br/>
        <br/> 
        Click Below and we'll 
        show you what's available
      </div>
      <div className="page__action button__nom">
        <div>
          <Link to="/cuisines">NOM NOW!!</Link>
        </div>
      </div>
    </div>
  </div>
)

export default withRouter(Home);