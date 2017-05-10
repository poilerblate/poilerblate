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
  combineReducers
} from 'redux';

import reducers from './reducers';

import Container from './components/App';
import NoMatch from './components/NotFound';

let store = createStore(
  combineReducers(reducers)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Container} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
