import React, { Component } from 'react';
import axios from 'axios';
import logo from '../logo.svg';
import '../App.css';
import Category from '../components/Category';
import Page from './Page';
import { Link, withRouter, Route } from 'react-router-dom';

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.items = [];
    this.state = {
      categories: null,
    };
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    // for if you get a chance to implement redux
    if(this.state.categories === null) {
      this.getCategories();
    }
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
      .catch(err => {
        console.log('Error getting types - supplying fakes');
        let fakes = [
          <Category key={0} name="Armenian" id={0} />,
          <Category key={1} name="American" id={1} />,
          <Category key={2} name="African" id={2} />,
        ]

        this.setState({
          categories: fakes
        });
      });
  }

  render() {
    return (
      <Page name="Cuisines" content={this.state.categories} />
      // <Page name="category-page">
      //   { this.state.categories }
      // </Page>
      // <div>
      //   <div>
      //     Categories down here!
      //     <ul>
      //       { this.state.categories }
      //     </ul>
      //     <Link to="/"> Back </Link>
      //   </div>
      // </div>
    );
  }
}

export default CategoryPage;
