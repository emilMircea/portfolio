import React, { Component } from "react";
import "animate.css";
import "./App.css";
import Nav from './components/Nav'
import Content from './components/Content'
import SideBar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="grid-container">
          <Nav />
          <SideBar />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
