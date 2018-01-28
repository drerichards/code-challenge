import axios from 'axios';
import history from '../history';
/**
 * ACTION TYPES
 */
const GET_RESTAURANTS = 'GET_RESTAURANTS';


/**
 * ACTION CREATORS
 */
const getRestaurants = restaurants => ({ type: GET_RESTAURANTS, restaurants });


/**
 * THUNK CREATORS
 */
export const restaurantsThunk = () =>
  dispatch =>
    axios.get('https://developers.zomato.com/api/v2.1/search?q=burger&count=10&lat=0&lon=0&radius=5&cuisines=chinese')
      .then(res =>
        dispatch(getRestaurants(res.data)))
      .catch(err => console.log(err));


export default function (state = {}, action) {
  switch (action.type) {
    case GET_RESTAURANTS:
      return action.restaurants;
    default:
      return state;
  }
}
