import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  withRouter,
  Link
} from 'react-router-dom';

import actions from 'actions';

import './NotFound.scss';

export class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h1>page not found</h1>
        <Link to="/">Back</Link>
      </div>
    )
  }
}

NotFound.propTypes = {
  actions: PropTypes.object,
  example: PropTypes.object
};

export default withRouter(connect(
  (state) => state,
  (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
)(NotFound));
