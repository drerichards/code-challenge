import React, { Component } from 'react';
import SearchBar from './SearchBar';

export default class Home extends Component {
  render() {
    return (
          <section className="hero is-large">
              <div className="hero-body">
                  <div className="container">
                      <SearchBar />
                    </div>
                </div>
            </section>
    );
  }
}
