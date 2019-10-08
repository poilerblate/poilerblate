import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';

import AppComponent from 'components/App';
import NotFoundComponent from 'components/NotFound';

const store = createStore(
  combineReducers(reducers),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? compose(
      applyMiddleware(thunk),
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
    )
    : compose(
      applyMiddleware(thunk),
    ),
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
  document.getElementById('root'),
);
