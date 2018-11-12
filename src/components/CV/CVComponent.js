import React from "react";
import "./CV.css";
import Info from "./Info";
import Skills from "./Skills";
import Employment from "./Employment";
import Education from "./Education";
import References from "./References";
import styled from "styled-components";

const HeaderSloganWrapper = styled.article`
  background: #363636c7;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  color: whitesmoke;
`;

const HeadingTile = () => (
  <div className="tile is-ancestor">
    <div className="tile is-vertical">
      <div className="tile">
        <div
          className="tile is-parent is-vertical"
          style={{ marginTop: "-1rem" }}
        >
          <HeaderSloganWrapper className="tile is-child notification has-text-centered">
            <p className="is-size-6 has-text-weight-light is-italic">
              More than 4 years of experience with Ruby and Javascript
            </p>
          </HeaderSloganWrapper>
        </div>
      </div>
    </div>
  </div>
);

const CVComponent = () => (
  <div className="columns is-multiline">
    <div className="column is-8 is-offset-2 cv-column">
      <div className="title is-flex has-text-centered ">
        <p className="is-uppercase">Emil</p>
        <p className="is-uppercase">Dragan</p>
      </div>
      <HeadingTile />
      <Info />
      <Employment />
      <Skills />
      <Education />
      <References />
    </div>
  </div>
);

export default CVComponent;
