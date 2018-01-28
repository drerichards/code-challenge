import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import restaurantsThunk from '../redux';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){

  }
  render() {
    return (
      <div className="field">
        <div className="inlined">
          <div className="control">
            <input className="input " type="text" placeholder="Find Burgers etc" />
            <button onClick={this.handleClick} className="button is-info">
              Location
            </button>
          </div>
          <div className="control">
            <input className="input is-primary" type="text" placeholder="Location" />
            <a className="button is-info">
              Search
            </a>
          </div>
        </div>
      </div>
    );
  }
}

// export default SearchBar;
const mapState = null; // ({ user, boards }) => ({ user, boards });
const mapDispatch = { restaurantsThunk };
export default connect(mapState, mapDispatch)(SearchBar);
