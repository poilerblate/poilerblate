import AppComponent from 'components/App';
import NotFoundComponent from 'components/NotFound';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import reducers from 'reducers';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers(reducers),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? compose(
      applyMiddleware(thunk),
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
    )
    : compose(applyMiddleware(thunk)),
);

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={AppComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
