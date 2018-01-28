import axios from 'axios';
import history from '../history';

import { zomato } from '../../secret';

/**
 * ACTION TYPES
 */
const GET_REVIEWS = 'GET_REVIEWS';


/**
 * ACTION CREATORS
 */
const getReviews = reviews => ({ type: GET_REVIEWS, reviews });


/**
 * THUNK CREATORS
 */
export const reviewsThunk = id =>
  dispatch =>
    axios.get(`https://developers.zomato.com/api/v2.1/reviews?res_id=${id}`, { headers: { 'user-key': zomato } })
      .then(res =>
        dispatch(getReviews(res.data.user_reviews)))
      .catch(err => console.log(err));

export default function (state = [], action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
}
