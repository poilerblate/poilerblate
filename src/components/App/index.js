import './App.scss';

import actions from 'actions';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

export const App = ({ example, changeExample }) => (
  <div className="boilerplate">
    <h1>poilerblate</h1>
    <Link to="/foo">Link to non-existent route</Link>
    <button onClick={() => changeExample('bar')}>Fire example action</button>
    <p>
      Example state value is currently <span className="reducerExample">{example.example}</span>
    </p>
  </div>
);

App.propTypes = {
  example: PropTypes.object,
  changeExample: PropTypes.func,
};

App.defaultProps = {
  example: { example: 'foo' },
};

export default withRouter(
  connect(
    (state) => ({ example: state.example }),
    actions,
  )(App),
);
