import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter } from 'react-router-dom';
import Page from './Page';

class RestaurantListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      restaurants: null
    };
    this.cuisineType = this.props.name;
    this.categoryData = this.props.location.state.category;
    this.getRestaurants = this.getRestaurants.bind(this);
  }

  componentDidMount() {
    if(this.state.restaurants === null) {
      this.getRestaurants();
    }
  }

  getRestaurants() {
    console.log('Getting restaurants...');

    const opts = {
      headers: new Headers({
        cuisine: this.id
      })
    };

    let data;

    fetch('/api/restaurants', opts)
      .then(resp => {
        return resp.json();
      })
      .then(obj => {
        const nothing = <div>No restaurants available right now</div>;

        const data = obj.restaurants.length < 1
          ? nothing
          : obj.restaurants.map(data => {
            let res = data.restaurant;
            return(
              <li key={res.id}>
                <Link to={{
                  pathname: `${this.props.match.url}/${res.name}`,
                  state: res
                }}>
                  { res.name }
                </Link>
              </li>
            );
          });

        this.setState({
          isLoaded : true,
          restaurants: data
        });
      })
      .catch(err => {
        console.log(`Error occurred: ${err}`);
      });
  }

  render() {
    return(
      // <Page name={this.cuisineType} content={this.state.restaurants} />
      <Page name={this.cuisineType} />
    )
  }
}

export default RestaurantListPage;
