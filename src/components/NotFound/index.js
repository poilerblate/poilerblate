import './NotFound.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <h1>page not found</h1>
    <Link to="/">Back</Link>
  </div>
);

export default NotFound;
