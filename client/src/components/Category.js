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
    this.name = this.props.name;
    this.id = this.props.id;
    this.getRestaurants = this.getRestaurants.bind(this);
    this.showRestaurants = this.showRestaurants.bind(this);
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
        data =  obj.restaurants.length < 1 
        ? <li key={0}>`No restaurants available right now`</li>
        : obj.restaurants.map(data => {
          let res = data.restaurant;
          return(
            <li key={res.id}>
              <Restaurant {...res}/>
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

  showRestaurants(e) {
    e.preventDefault();
    console.log('Start showing restaurants');
    this.getRestaurants();
  }

  // wait until clicked to load restaurants
  // componentDidMount() {
  //   this.getRestaurants();
  //   console.log(this.state.restaurants);
  // }

  render() {
    const content = !this.state.isLoaded 
      ? <p/>
      : <ul>{this.state.restaurants}</ul>

    return (
      <li onClick={this.showRestaurants} >
        <p>{this.name}</p>
        <div>{ content }</div>
      </li>);
  }
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  restaurants: PropTypes.arrayOf(Restaurant),
};

Category.defaultProps = {
  restaurants: []
}

export default Category;