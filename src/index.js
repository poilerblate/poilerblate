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
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from 'reducers';

import AppComponent from 'components/App';
import NotFoundComponent from 'components/NotFound';

let store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={AppComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
