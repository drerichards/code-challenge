import axios from 'axios';
import history from '../history';

import { zomato } from '../../secret';


/**
 * ACTION TYPES
 */
const GET_RESTAURANTS = 'GET_RESTAURANTS';
const GET_ONE_RESTAURANT = 'GET_ONE_RESTAURANT';


/**
 * ACTION CREATORS
 */
const getRestaurants = restaurants => ({ type: GET_RESTAURANTS, restaurants });
const getOneRestaurant = restaurant => ({ type: GET_ONE_RESTAURANT, restaurant });


/**
 * THUNK CREATORS
 */
export const restaurantsThunk = () =>
  dispatch =>
    axios.get('https://developers.zomato.com/api/v2.1/search?q=burger&count=5&lat=40.742051&lon=-74.004821', { headers: { 'user-key': zomato } })
      .then(res =>
        dispatch(getRestaurants(res.data.restaurants)))
      .catch(err => console.log(err));

export const singleRestaurantThunk = id =>
  dispatch =>
    axios.get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`, { headers: { 'user-key': zomato } })
      .then(res =>
        dispatch(getOneRestaurant(res.data)))
      .catch(err => console.log(err));

/**
 * INTIAL STATE
 */
const initial = {
  restaurantList: [],
  restaurant: {},
};

/**
 * REDUCER
 */

export default function (state = initial, action) {
  switch (action.type) {
    case GET_RESTAURANTS:
      return Object.assign({}, state, { restaurantList: action.restaurants });
    case GET_ONE_RESTAURANT:
      return Object.assign({}, state, { restaurant: action.restaurant });
    default:
      return state;
  }
}
