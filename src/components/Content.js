import React from "react";
import { Route } from "react-router-dom";
import routes from "../constants/routes";
import name from "../images/name.svg";
import { Link } from "react-router-dom";

const Content = () => (
  <div className="Content animated fadeInRight">
    <div className="content-heading-wrapper">
      <img className="content-img" src={name} alt="Emil Dragan" />
      <p className="content-heading">
        <Link to="/cv">
          More than 3 years of experience with JS and Ruby.
          <span className="underline">See CV</span>
        </Link>
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
