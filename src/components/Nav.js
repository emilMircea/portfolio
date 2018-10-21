import React from "react";
import "../App.css";

const Logo = () => (
  <div
    className="Logo is-flex dropdown is-active"
    style={{ paddingLeft: "3rem" }}
  >
    <a className="is-text">Portfolio</a>
  </div>
);

class Contact extends React.Component {
  state = {
    isActive: false,
  };

  toggleState = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    const { isActive } = this.state;
    return (
      <div className={`dropdown Contact ${isActive ? 'is-active' : ''}`}>
        <div className="dropdown-trigger">
          <a
            className="is-text"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={this.toggleState}
          >
            <span>Contact</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </a>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content is-flex">
            <a className="dropdown-item">
              emil-mircea@protonmail.com
            </a>
            <a className="dropdown-item">Github</a>

            <hr className="dropdown-divider" />
            <a className="dropdown-item">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const Nav = () => (
  <React.Fragment>
    <Logo />
    <Contact />
  </React.Fragment>
);

export default Nav;
