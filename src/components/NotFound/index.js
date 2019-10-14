import './NotFound.scss';

import actions from 'actions';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

export class NotFound extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="not-found">
        <h1>page not found</h1>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

NotFound.propTypes = {
  actions: PropTypes.object,
  changeExample: PropTypes.func,
};

export default withRouter(
  connect(
    (state) => ({ example: state.example }),
    actions,
  )(NotFound),
);
