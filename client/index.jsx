import React,{ Component } from 'react';
import ReactDOM, { render } from "react-dom";
import Routes from './routes';
import "./scss/index.scss";

render(
    <Routes />,
    document.getElementById('app')
);
