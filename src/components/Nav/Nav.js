import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
// icons
import phoneIcon from '../../images/phone-icon.svg'
import mailIcon from '../../images/mail-icon.svg'
import githubIcon from '../../images/github-icon.svg'
import "./Nav.css";

const IconImage = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 8px;
`;

const Logo = () => (
  <div
    className="Logo is-flex dropdown is-active"
    style={{ paddingLeft: "3rem", alignItems: "flex-start" }}
  >
    <p className="is-text">Portfolio</p>
  </div>
);

class Contact extends React.Component {
  state = {
    isActive: false
  };

  toggleState = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    const { isActive } = this.state;
    return <div className="Contact">
        <Link className="see-cv-link" to="/cv">
          See CV
        </Link>
        <div className={`dropdown ${isActive ? "is-active" : ""}`}>
          <div className="dropdown-trigger has-text-centered">
            <p className="see-contact-info is-text" aria-haspopup="true" aria-controls="dropdown-menu" onClick={this.toggleState} style={{ marginTop: "-2px", cursor: 'pointer' }}>
              Contact Info
            </p>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <p className="dropdown-item">
                <span className="icon">
                  <IconImage src={mailIcon} alt="email icon" />
                </span>
                <a href="#null">emil-mircea@protonmail.com</a>
              </p>
              <p className="dropdown-item">
                <span className="icon">
                  <IconImage src={phoneIcon} alt="phone icon" />
                </span>
                <a href="#null">+34 615 248 763</a>
              </p>
              <p className="dropdown-item">
                <span className="icon">
                <IconImage src={githubIcon} alt='github icon' />
                </span>
                <a href="https://github.com/emilMircea">Github Profile</a>
              </p>
            </div>
          </div>
        </div>
      </div>;
  }
}

const Nav = () => (
  <React.Fragment>
    <Logo />
    <Contact />
  </React.Fragment>
);

export default Nav;
