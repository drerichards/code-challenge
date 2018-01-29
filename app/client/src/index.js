import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore} from 'redux';
import { createLogger } from 'redux-logger';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';

const history = createHistory();


// import registerServiceWorker from './registerServiceWorker';

function isPromise(v) {
  return v && typeof v.then === 'function';
}

const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    action.payload.then(
      res => {
        action.payload = res;
        store.dispatch(action);
      },
      error => {
        action.error = true;
        action.payload = error.response.body;
        store.dispatch(action);
      }
    );
    return;
  }
  next(action);
};


const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(promiseMiddleware)
  } else {
    return applyMiddleware(promiseMiddleware, createLogger())
  }
}

const store = createStore(
  rootReducer, composeWithDevTools(getMiddleware())
)


ReactDOM.render(
  <Provider store={store}>
  <ConnectedRouter history={history}>
    <Switch>
      <Route path='/' component={App} />
    </Switch>
  </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('root'));
// registerServiceWorker();
