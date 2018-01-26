import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Category from './components/Category';

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
    // this.getRestaurants = this.getRestaurants.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  structureData(res) {
    // let items = [];
    // res.data.categories.map((item) => {
    //   let obj = item.categories;
    //   items.push(<Category key={obj.id.toString()} name={obj.name} />);
    // });
    let items = res.data.categories.map((item) => {
      let obj = item.categories;

      // return <Category key={obj.id.toString()} name={obj.name} onClick={this.getRestaurants} />
      return <Category key={obj.id.toString()} name={obj.name} id={obj.id}/>
    });

    this.setState({categories: items })
  }

  getCategories() {
    axios
      .get(this.config.url.categories, {
        headers: {
          'user-key' : this.config.user_key
        }
      })
      .then(res => {
        this.structureData(res);
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
