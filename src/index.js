import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { Provider } from 'react-redux';
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import { App } from './components/App';
import { NotFound } from './components/NotFound';

let store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
