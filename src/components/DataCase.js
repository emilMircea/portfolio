import React from "react";
import VideoCard from "./VideoCard";

const DataCase = () => (
  <div className="animated fadeIn case-wrapper">
    <p className="subtitle has-text-grey is-uppercase has-text-weight-semibold">
      Data Analysis Case Study
    </p>
    <p className="problem is-italic has-text-weight-light is-size-6">
      <span className="has-text-weight-semibold">Problem:</span> Data coming
      from an API is synthesized into charts that evidentiate relevant business
      parameters.
    </p>
    <p className="solution has-text-weight-light is-size-6">
      <span className="has-text-weight-semibold">Solution:</span> React UI for
      client-side data analysis. This UI acccepts data in the form given by the
      mock data that is used to display the charts. This data can be obtained
      either via an API request or uploaded as an excel file.
    </p>
    <br />
    <VideoCard
      videosource="https://duaw26jehqd4r.cloudfront.net/items/0d3W361s0L0t0t1X2k2d/Screen%20Recording%202018-10-31%20at%2005.10%20PM.mov"
      onlineVersion="https://build-ryfvavnbas.now.sh"
      sourcecode="https://github.com/emilMircea/dashboard.git"
    />
    <div className="tags is-flex" style={{ justifyContent: "space-between" }}>
      <span className="tag is-dark">react</span>
      <span className="tag is-dark">react-chartjs-2</span>
      <span className="tag is-dark">animate.css</span>
      <span className="tag is-dark">styled-components</span>
      <span className="tag is-dark">bootstrap 4</span>
    </div>
  </div>
);

export default DataCase;
