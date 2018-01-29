import React, { Component } from 'react'
const DinnerList = ({restaurant}) =>
    <div>
        <h2>Restaurant Listings</h2>
        <ul>
            {rrestaurant.map((restaurant, i) =>
            <li key={i}>Name: {restaurant.name}, City:        {restaurant.city}
            </li>
            )}
        </ul>
    </div>
module.exports = DinnerList