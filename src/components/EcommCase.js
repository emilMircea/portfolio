import React from "react";
import VideoCard from "./VideoCard";

const EcommCase = () => (
  <div className="animated fadeIn case-wrapper">
    <p className="has-text-grey is-uppercase has-text-weight-semibold">
      E-commerce Case Study
    </p>
    <p className="problem is-italic has-text-weight-light is-size-6">
      <span className="has-text-weight-semibold">Problem:</span> A better user
      experience for e-commerce.
    </p>
    <div className="solution has-text-weight-light is-size-6">
      <ul>
        <span className="has-text-weight-semibold">Solution:</span>
        <li>
          <p className="is-size-6">
            <span className="is-italic">Faster navigation</span> between pages
            without triggering browser reloads. Here react-router-4 helps
            deliver a responsive user experience.
          </p>
          <br />
          <VideoCard videosource="https://duaw26jehqd4r.cloudfront.net/items/0F412k0H3F1Z0121041c/Screen%20Recording%202018-11-09%20at%2003.19%20PM.mov" />
        </li>
        <li>
          <p className="is-size-6">
            <span className="is-italic">Fast shopping cart updates</span> by
            adding or removing products from the cart instantly without
            triggering page reloads. Uses Mobx as state management solution to
            update quantities and prices according to user actions.
          </p>
          <br />
          <VideoCard videosource="https://duaw26jehqd4r.cloudfront.net/items/322p3I0X0i1P283Y2K0Z/Screen%20Recording%202018-11-09%20at%2003.28%20PM.mov" />
        </li>
      </ul>
    </div>
    <br />
    <div className="tags is-flex" style={{ justifyContent: "space-between" }}>
      <span className="tag is-dark">react</span>
      <span className="tag is-dark">mobx</span>
      <span className="tag is-dark">animate.css</span>
      <span className="tag is-dark">styled-components</span>
      <span className="tag is-dark">bulma</span>
      <span className="tag is-dark">superagent</span>
      <span className="tag is-dark">react-stripe-elements</span>
      <span className="tag is-dark">cloudinary-react</span>
      <span className="tag is-dark">react-dropzone</span>
      <span className="tag is-dark">material-ui</span>
    </div>
  </div>
);

export default EcommCase;
