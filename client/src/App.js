import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.items = [];
    this.config = {
      url: {
        base: "https://developers.zomato.com/api/v2.1",
        categories: "https://developers.zomato.com/api/v2.1/categories",
        restaurants: "https://developers.zomato.com/api/v2.1/search"
      },
      user_key: "d2b02bc31ac7f50438898aa6eee10504",
      request_type: "application/json"
    };
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    axios
      .get(this.config.url.categories, {
        headers: {
          'user-key' : this.config.user_key
        }
      })
      .then(res => {
        console.log('Found data...setting');
        let items = [];
        res.data.categories.map( (item) => {
          items.push(<li>item</li>);
        });
        this.setState({categories: items })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            { this.state.categories }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
