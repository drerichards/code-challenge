import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const NavBar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <NavLink to="/"><img className="logo navbar-item" src="/assets/logo.svg" alt="logo" /></NavLink>
      <SearchBar />
    </div>
  </nav>
);

export default NavBar;
