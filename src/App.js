import React, { Component } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import "animate.css";
import "./App.css";
import Nav from './components/Nav'
import Content from './components/Content'



const ANavLink = ({ children, ...props }) => (
  <NavLink activeClassName='selected' {...props}>
    {children}
  </NavLink>
)

const Links = (props) => (
  <div className="Links animated bounce">
    <ul className="is-flex" style={{ justifyContent: "space-evenly" }}>
      <li>
        <ANavLink to='/auth/'>Auth</ANavLink>
      </li>
      <li>
        <ANavLink to="/data">Data</ANavLink>
      </li>
      <li>
        <ANavLink to="/ecomm">E-commerce</ANavLink>
      </li>
    </ul>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="grid-container">
          <Nav />
          <Links />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
