import React from "react";
import "./CV.css";
import Info from './Info'
import Profile from './Profile'
import Skills from './Skills'
import WorkHistory from './WorkHistory'

const CVComponent = () => (

    <div className="columns is-multiline">
      <div className="column is-6 is-offset-3 has-text-centered cv-column">
        <p className="title">Emil Dragan</p>
      </div>
      <Info />
      <Profile />
      <Skills />
      <WorkHistory />
    </div>

);

export default CVComponent;
