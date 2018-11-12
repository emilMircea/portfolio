import React from "react";
import "../App.css";

const Logo = () => (
  <div
    className="Logo is-flex dropdown is-active"
    style={{ paddingLeft: "3rem" }}
  >
    <p className="is-text">Portfolio</p>
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
        <div className="dropdown-trigger has-text-centered">
          <button
            className="button is-text"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={this.toggleState}
          >
            Contact
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content is-flex">
            <p className="dropdown-item">
              <a href="#null">emil-mircea@protonmail.com</a>
            </p>
            <p className="dropdown-item"><a href="https://github.com/emilMircea">Github</a></p>

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
