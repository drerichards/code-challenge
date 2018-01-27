import React, { Component } from 'react';
import axios from 'axios';
import logo from '../logo.svg';
import '../App.css';
import Category from '../components/Category';

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.items = [];
    this.state = {
      categories: [],
    };
    this.getCategories
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    console.log('Getting cuisine types');

    fetch('api/cuisines')
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        let items = data.cuisines.map((item) => {
          let obj = item.cuisine;
          return <Category key={obj.cuisine_id.toString()} name={obj.cuisine_name} id={obj.cuisine_id}/>
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

export default CategoryPage;
