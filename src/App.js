import React, { Component } from "react";
import "animate.css";
import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/Content";
import SideBar from "./components/Sidebar";
import { Route } from "react-router-dom";

const App = (props) => (
  <div className="wrapper">
    <div className="grid-container">
      <Nav />
      <SideBar pathname={props.location.pathname} />
      <Content />
    </div>
  </div>
)

const PropsRoute = ({ component: Component, ...props }) => (
  <Route
    { ...props }
    render={ renderProps => (<App { ...renderProps } { ...props } />) }
  />
);



export default PropsRoute;
