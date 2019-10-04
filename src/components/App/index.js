import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  withRouter,
  Link
} from 'react-router-dom';

import actions from 'actions';

import './App.scss';

export class App extends Component {
  render() {
    return (
      <div className="boilerplate">
        <h1>poilerblate</h1>
        <Link to="/foo">
          Link to non-existent route
        </Link>
        <button onClick={() => this.props.changeExample('bar')}>
          Fire example action
        </button>
        <p>
          Example state value is currently <span className="reducerExample">{this.props.example.example}</span>
        </p>
      </div>
    )
  }
}

App.propTypes = {
  example: PropTypes.object,
  changeExample: PropTypes.func
};

App.defaultProps = {
  example: { example: 'foo' }
}

export default withRouter(connect(
  state => ({ example: state.example }),
  actions
)(App));
