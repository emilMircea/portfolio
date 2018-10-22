import React from 'react';
import Content from "./Content";
import SideBar from "./Sidebar";
import Nav from './Nav'

const CaseStudies = props => (
  <div className="grid-container">
    <Nav />
    <SideBar pathname={props.location.pathname} />
    <Content />
  </div>
);

export default CaseStudies;
