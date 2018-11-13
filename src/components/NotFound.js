import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div>
    <p className="title">Oh Snap! This route is unknown!</p>
    <Link to='/'>Click to return to portfolio page</Link>
  </div>
);

export default NotFound;
