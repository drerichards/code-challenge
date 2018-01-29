import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import restaurants from './restaurant';
import reviews from './reviews';
import location from './location';


const reducer = combineReducers({ restaurants, reviews, location });
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
));
const store = createStore(reducer, middleware);

export default store;
export * from './restaurant'; // to easily export thunks
export * from './reviews';
export * from './location';
