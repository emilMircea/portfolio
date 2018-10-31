import React from "react";
import dashboard from "../images/data_analysis.png";

const DataCase = () => (
  <div className="animated fadeIn case-wrapper">
    <p>
      React solution for client-side Data Analysis. Makes possible uploading
      excel files and constructing charts to identify relevant trends. Below a
      chart that shows sales per product.
    </p>
    <br />
    <figure className="image">
      <img src={dashboard} alt="dashboard data analysis" />
    </figure>
  </div>
);

export default DataCase;
