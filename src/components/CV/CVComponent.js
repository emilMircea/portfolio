import React from "react";
import "./CV.css";
import Info from "./Info";
import Profile from "./Profile";
import Skills from "./Skills";
import Employment from "./Employment";
import Education from "./Education";
import References from "./References";

const CVComponent = () => (
  <div className="columns is-multiline">
    <div className="column is-8 is-offset-2 cv-column">
      <div className="title is-flex has-text-centered ">
        <p className="is-uppercase">Emil</p>
        <p className="is-uppercase">Dragan</p>
      </div>
      <Info />
      <Employment />
      <Skills />
      <Education />
      <References />
    </div>
  </div>
);

export default CVComponent;
