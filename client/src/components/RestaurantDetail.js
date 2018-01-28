import React from 'react';
import Restaurant from '../components/Restaurant';

const RestaurantDetail = props => (
  <ul>
    <li>{this.props.name}</li>
    <li>{this.props.location.address}</li>
    <li>{this.props.url}</li>
    <li>{this.props.is_delivering_now ? 'GET FOOD NOW!' : 'Sry :( Not Right Now'}</li>
    <li></li>
</ul>
);

export default RestaurantDetail;
