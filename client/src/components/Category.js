import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Restaurant from './Restaurant';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
      restaurants: []
    }
    this.config = {
      url: {
        base: "https://developers.zomato.com/api/v2.1",
        categories: "https://developers.zomato.com/api/v2.1/cuisines",
        restaurants: "https://developers.zomato.com/api/v2.1/search"
      },
      user_key: "d2b02bc31ac7f50438898aa6eee10504",
      request_type: "application/json"
    };
    this.name = props.name || "Loading...";
    this.id = props.id.toString();
    this.location_type = "zone";
    this.location_id = "94741";
    this.city_id = 280;
    this.getRestaurants = this.getRestaurants.bind(this);
    this.showRestaurants = this.showRestaurants.bind(this);
  }

  getRestaurants() {
    console.log('Getting restaurants...');

    const opts = {
      headers: new Headers({
        category: this.id
      })
    };

    fetch('/api/restaurants', opts)
      .then(resp => {
        return resp.json();
      })
      .then(obj => {
        let rests = obj.restaurants.map(data => {
          let res = data.restaurant;
          return(
            <li key={res.id}>
              <Restaurant {...res}/>
            </li>
          );
        });

        this.setState({
          isLoaded : true,
          restaurants: rests
        });
      })
      .catch(err => {
        console.log(`Error occurred: ${err}`);
      });
  }

  showRestaurants(e) {
    e.preventDefault();
    console.log('Start showing restaurants');
  }

  componentDidMount() {
    this.getRestaurants();
    console.log(this.state.restaurants);
  }

  render() {
    const content = !this.state.isLoaded 
      ? 'Loading...'
      : this.state.restaurants;

    return (
      <li onClick={this.showRestaurants} >
        {this.name}
        <ul className="">
          { content }
        </ul>
      </li>);
  }
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  restaurants: PropTypes.arrayOf(Restaurant),
  // handleClick: PropTypes.func.isRequired,
};

Category.defaultProps = {
    restaurants: []

}

export default Category;