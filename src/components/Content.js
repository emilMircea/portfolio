import React from "react";
import {Route} from 'react-router-dom'
import routes from '../constants/routes'
import name from '../images/name.svg'
import { Link } from 'react-router-dom'
import CVComponent from './CV/CVComponent'

const Content = () => (
  <div className="Content animated fadeInRight">
    <div className="content-heading-wrapper">
      <img className='content-img' src={name} alt="Emil Dragan"/>
      <p className='content-heading'>
        <a>More than 3 years of experience with JS and Ruby.
          <span className='underline'>
            <Link to='/cv'>
              See CV
            </Link>
          </span>
        </a>
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
