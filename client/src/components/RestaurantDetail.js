import React from 'react';
import Restaurant from '../components/Restaurant';

const RestaurantDetail = props => (
  <ul>
    <li>{props.name}</li>
    <li>{props.location.address}</li>
    <li>{props.url}</li>
    <li>{props.is_delivering_now ? 'GET FOOD NOW!' : 'Sry :( Not Right Now'}</li>
    <li></li>
</ul>
);

export default RestaurantDetail;
