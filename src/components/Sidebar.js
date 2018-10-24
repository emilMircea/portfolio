import React from "react";
import { NavLink } from "react-router-dom";

const ANavLink = ({ children, ...props }) => (
  <NavLink activeClassName="selected" {...props}>
    {children}
  </NavLink>
);

const SideBar = (props) => (
  <div className="Links animated fadeInLeft">
    <p className='p-heading'>Case Studies</p>
    <ul className="is-flex ul-links" style={{ justifyContent: "space-evenly" }}>
      <li>
        <ANavLink to="/ecomm">E-commerce</ANavLink>
      </li>
      <li>
        <ANavLink to="/data">Data</ANavLink>
      </li>
      <li>
        <ANavLink className={props.pathname === '/' ? 'selected' : ''} to="/auth/">Auth</ANavLink>
      </li>
    </ul>
  </div>
);

export default SideBar;
