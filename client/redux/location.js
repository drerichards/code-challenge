/**
 * ACTION TYPES
 */
const GET_LOCATION = 'GET_LOCATION';

/**
 * ACTION CREATORS
 */
const getLocation = location => ({ type: GET_LOCATION, location });


/**
 * THUNK CREATORS
 */
export const locationThunk = () =>
  dispatch =>
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(getLocation(position.coords));
    });

export default function (state = {}, action) {
  switch (action.type) {
    case GET_LOCATION:
      return action.location;
    default:
      return state;
  }
}
