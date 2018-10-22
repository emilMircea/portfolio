import React from "react";
import Education from './Education'
import References from './References'

const TwoThousandEighteen = () => (
  <React.Fragment>
    <p className="has-text-weight-light is-capitalized">
      2017-2018: Full stack developer @ MEOW Stores - Nederland
    </p>
    <p className="has-text-weight-light  is-size-6">
      Team Lead - building a modern e-commerce solution with a Rails web API and
      a performant React web UI. (Work in progress!)
    </p>
    <p className="has-text-weight-light  is-size-6">
      Team Lead - implementing a custom sales analysis solution.
    </p>
    <p className="has-text-weight-light  is-size-6">
      Team Lead - converting customers into web customers. Custom sales analysis
      and email campaign for active customers.
    </p>
    <p>
      <span className=" is-capitalized is-size-7">
        Tech: React, MobX, Ruby on Rails, Bootstrap/Bulma, Jest, Postgresql,
        Json Web Tokens, Sass, various API’s (AWS S3, Stripe, Cloudinary)
      </span>
    </p>
  </React.Fragment>
);

const TwoThousandSeventeen = () => (
  <React.Fragment>
    <p className="has-text-weight-light is-capitalized">
      2016-2017: Full stack developer Achiral.io, Romania.
    </p>
    <p className="has-text-weight-light  is-size-6">
      Developing a webapp that processes data (Excell) on the client-side, saves
      it and returns useful business information computed on the backend server.
    </p>
    <p>
      <span className=" is-capitalized is-size-7">
        Tech: React, MobX, Ruby on Rails, Bootstrap/Bulma, Jest, Postgresql,
        Json Web Tokens
      </span>
    </p>
  </React.Fragment>
);

const TwoThousandSixteen = () => (
  <React.Fragment>
    <p className="has-text-weight-light is-capitalized">
      2014-2017: Full stack developer (Gloria Jeans Romania)
    </p>
    <p className="has-text-weight-light  is-size-6">
      Software Developer on the team that implemented search and profitability
      analysis on products.
    </p>
    <p className="has-text-weight-light  is-size-6">
      Software Developer on the team that implemented sales analysis.
    </p>
    <p className="has-text-weight-light  is-size-6">
      Developed marketing promotion app to automatically find and reward the top
      3 customers of the week.
    </p>
    <p>
      <span className=" is-capitalized is-size-7">
        Tech: Ruby on Rails, Redis, Elastic Search, Jquery, HAML, MySQL
      </span>
    </p>
  </React.Fragment>
);

const TwoThousandEight = () => (
  <React.Fragment>
    <p className="has-text-weight-light is-capitalized">
      2004-2008: Business analyst Arabesque - Galati, Romania
    </p>
    <p className="has-text-weight-light  is-size-6">
      Gather information, evaluate business operations, determine business
      objectives
    </p>
    <p className="has-text-weight-light  is-size-6">
      Prepare technical reports and analyse trends
    </p>
    <p className="has-text-weight-light  is-size-6">
      Evaluate and interpret data for business analysis and strategic
      decision-making
    </p>
  </React.Fragment>
);


const WorkHistory = () => (
  <div className="column is-8 is-offset-2">
    <p className="subtitle has-text-weight-light cv-heading">Work History</p>
    <TwoThousandEighteen />
    <br />
    <TwoThousandSeventeen />
    <br />
    <TwoThousandSixteen />
    <br />
    <TwoThousandEight />
    <br />
    <p className="subtitle has-text-weight-light cv-heading">Education</p>
    <Education />
    <br />
    <p className="subtitle has-text-weight-light cv-heading">References</p>
    <References />
    <br />
  </div>
);

export default WorkHistory;
