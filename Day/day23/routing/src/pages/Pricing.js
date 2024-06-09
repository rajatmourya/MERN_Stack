import React from 'react'
import { Outlet, useLocation } from 'react-router';
import {Link} from 'react-router-dom'

function Pricing() {

  const location = useLocation();
  console.log(location);

  return (
    <div>
      Show Pricing
      <nav>
        <Link to={location.pathname + '/free'} >Free</Link>
        <Link to={location.pathname + '/basic'} >Basic Pricing</Link>
        <Link to={location.pathname + '/premium'} >Premium Pricing</Link>
      </nav>
      <Outlet />
      <h1>Hello world</h1>
    </div>
  )
}

export default Pricing