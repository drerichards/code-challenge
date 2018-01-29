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
export const restaurantsThunk = (search, location) =>
  (dispatch) => {
    axios.get(`https://developers.zomato.com/api/v2.1/search?q=${search.query}&count=7&lat=${location.latitude}&lon=${location.longitude}&sort=real_distance`, { headers: { 'user-key': zomato } })
      .then((res) => {
        dispatch(getRestaurants(res.data.restaurants));
      })
      .then(() => history.push('/search'))
      .catch(err => console.log(err));
  };

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
