import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { restaurantsThunk } from '../redux';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.props.restaurantsThunk(this.state, this.props.location);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="field is-grouped">
        <div className="control">
          <input onChange={this.handleChange} className="input" name="query" type="text" placeholder="Find Burgers etc" />
        </div>
        <div className="control">
          <button onClick={this.handleClick} className="button is-info">
            Search Nearby
          </button>
        </div>
      </div>
    );
  }
}

// export default SearchBar;
const mapState = ({ location }) => ({ location });
const mapDispatch = { restaurantsThunk };
export default connect(mapState, mapDispatch)(SearchBar);


