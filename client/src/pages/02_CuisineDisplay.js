import React, { Component } from 'react';
import { Link, withRouter, Route } from 'react-router-dom';
import RestaurantList from './03_Restaurants';
import Category from '../components/Category';
import Page from './Page';

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
          <Link to={{
            pathname: `${this.props.match.url}/0`,
            state: {
              hasObj: true,
              obj: <Category key={0} name="Armenian" id={0} />
            }
          }}>
            <Category key={0} name="Armenian" id={0} />
          </Link>,
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
    );
  }
}

export default CategoryPage;
