import React from "react";
import { NavLink } from "react-router-dom";

const ANavLink = ({ children, ...props }) => (
  <NavLink activeClassName="selected" {...props}>
    {children}
  </NavLink>
);

const SideBar = ({ pathname }) => (
  <div className="Links animated fadeInLeft">
    <p className="has-text-grey is-uppercase has-text-weight-semibold is-size-7" style={{ letterSpacing: '4px' }}>
      Case Study Links
    </p>
    <ul className="is-flex ul-links" style={{ justifyContent: "space-around", marginTop: '.5rem' }}>
      <li>
        <ANavLink className={pathname === "/" ? "selected" : ""} to="/ecomm">
          E-commerce
        </ANavLink>
      </li>
      <li>
        <ANavLink to="/data">Data</ANavLink>
      </li>
    </ul>
  </div>
);

export default SideBar;
