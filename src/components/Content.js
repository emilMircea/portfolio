import React from "react";
import {Route} from 'react-router-dom'
import routes from '../constants/routes'
import name from '../images/name.svg'

const Content = () => (
  <div className="Content animated fadeInRight">
    <div className="content-heading-wrapper">
      <img className='content-img' src={name} alt="Emil Dragan"/>
      <p className='content-heading'>
        <a>More than 3 years of experience with JS and Ruby. <span className='underline'>See CV</span></a>
      </p>
    </div>
    {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
  </div>
);

export default Content;
