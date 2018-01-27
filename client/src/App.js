import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Category from './components/Category';

class App extends Component {
  constructor(props) {
    super(props);
    this.items = [];
    this.state = {
      categories: [],
    };
    // this.getRestaurants = this.getRestaurants.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    console.log('Getting categories');

    fetch('api/cuisines')
      .then(resp => {
        return resp.json()
      })
      .then(cats => {
        let items = cats.cuisines.map((item) => {
          let obj = item.cuisine;
          return <Category key={obj.id.toString()} name={obj.name} id={obj.id}/>
        });

        this.setState({
          categories: items
        });
      })
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
