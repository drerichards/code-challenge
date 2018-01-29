import React, { Component } from 'react';
import {config} from './config.js'; 

const user_key = config.user_key;

const reqHeaders = new Headers({
  'user-key': user_key
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      keywords: '',
      results: ''
    };
    this.updateCityValue = this.updateCityValue.bind(this);
    this.updateQueryValue = this.updateQueryValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getRestaurantResults(cityId) {
    let query = this.state.keywords;
    let url = 'https://developers.zomato.com/api/v2.1/search?entity_id=' + cityId + '&q=' + query;

    fetch(url, {headers: reqHeaders}).then((response) => {
      response.json().then((data) => {
        console.log(data);
        console.log(url);
        // return data;
        // this.setState({
        //   results: data
        // });
      });
    }).catch((error) => {
      console.log("Ugh there was an error.");
    });

  }

  getCityId() {
    // let city = this.state.city;
    // let url = 'https://developers.zomato.com/api/v2.1/locations?query=' + city;

    // fetch(url, {headers: reqHeaders}).then((response) => {
    //   response.json().then((data) => {
    //     let cityId = data['location_suggestions'][0]['entity_id'];
    //     return cityId;
    //   });
    // }).catch((error) => {
    //   console.log("Ugh there was an error.");
    // });

    let philadelphia = 287;
    return philadelphia;
  }

  handleSubmit(e) {
    e.preventDefault();
    const fetchCityData = async () => {
      await this.getCityId();
    }

    // fetchCityData().then((result) => {
    //   console.log(result).then((result) => {
    //     this.getRestaurantResults(result);
    //   });
    // }).catch((error) => {
    //   console.log("Ugh there was an error.");
    // });
    fetchCityData().then((cityId) => {
      this.getRestaurantResults(cityId);
    })


    // const fetchData = async () => {
    //   const cityId = await this.getCityId();
    //   const restaurants = await this.getRestaurantResults(cityId);
    //   console.log(restaurants);
    //   // return restaurants;
    //   return restaurants;
    // }
    // fetchData().then((restaurants) => {
    //   console.log(restaurants);
    //   this.setState({
    //     results: restaurants
    //   })
    // });
    
    // fetchCityData().then((response) => {
    //   console.log(response);
    //   this.getRestaurantResults(response);
    // }).catch((error) => {
    //   console.log("Ugh there was an error.");
    // });
  }

  updateCityValue(e) {
    console.log('The city is ' + e.target.value);
    this.setState({
      city: e.target.value
    });
  }

  updateQueryValue(e) {
    console.log('The keyword query is ' + e.target.value);
    this.setState({
      keywords: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Restaurant Search</h1>
        </header>

        <div>
          Look for great restaurants in Philly!
          <form onSubmit={this.handleSubmit}>
            {/* <input
              type='text'
              placeholder='Philadelphia, New York, Boston...'
              required
              value={this.state.city}
              onChange={this.updateCityValue}
              label='City'
            /> */}
            <input
              type='text'
              placeholder='Cafe, Bakery, Restaurant...'
              value={this.state.keywords}
              onChange={this.updateQueryValue}
              label='Keywords'
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>{this.state.results}</div>
      </div>
    );
  }
}

export default App;
