import React from "react";
import { Route, NavLink } from "react-router-dom";
import routes from "../constants/routes";
import name from "../images/name2.svg";

const Content = () => (
  <div className="Content animated fadeInRight">
    <div className="content-heading-wrapper">
      <img className="content-img" src={name} alt="Emil Dragan" style={{ marginTop: '2.5rem' }} />
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
