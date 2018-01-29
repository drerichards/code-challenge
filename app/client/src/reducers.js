import { combineReducers } from 'redux';

const defaultState = {
  appName: 'FoodMeNow',
  loading: true,
}

const common = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_RESTAURANTS":
      return {
        ...state,
        restaurants: JSON.parse(action.payload).restaurants
      }
    case "ADD_CURRENT_LOCATION":
      return {
        ...state,
        loading: false,
        currentLocation: JSON.parse(action.payload).location_suggestions[0]
      }
    case "ADD_SINGLE_RESTAURANT":
      return {
        ...state,
        restaurant: JSON.parse(action.payload)
      }
    case "ADD_REVIEWS":
      return {
        ...state,
        reviews: JSON.parse(action.payload).user_reviews
      }
    case "REMOVE_RESTAURANT":
      return {
        ...state,
        restaurant: null,
        reviews: null
      }
    default:
      return {
        ...state
      };
  }
}

export default combineReducers({
  common
});
