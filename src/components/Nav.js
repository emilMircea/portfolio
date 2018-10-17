import React from 'react';
import '../App.css'

const Contact = () => (
  <div className="Contact animated bounce">
    <a className="is-text">Contact</a>
  </div>
);

const Logo = () => (
  <div className="Logo animated bounce is-flex" style={{ paddingLeft: "3rem" }}>
    <a className="is-text">Portfolio</a>
  </div>
);

const Nav = () => (
  <React.Fragment>
    <Logo />
    <Contact />
  </React.Fragment>
);

export default Nav;
