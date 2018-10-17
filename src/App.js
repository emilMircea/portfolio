import React, { Component } from "react";
import "./App.css";
import 'bulma'

const Links = () => (
  <div className='Links'>
    <a className='is-text'>Auth</a>
    <a className='is-text'>Data</a>
    <a className='is-text'>Ecomm</a>
  </div>
)



class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="grid-container">
          <div className="Logo">Logo</div>
          <Links />
          <div className="Contact">Contact</div>
          <div className="Content">Content</div>
        </div>
      </div>
    );
  }
}

export default App;
