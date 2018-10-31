import React from "react";
import Education from './Education'
import References from './References'
import styled from 'styled-components'

const Achievement = styled.li`
  padding-left: 1rem;
  list-style-type: circle;
`

const TwoThousandEight = () => (
  <React.Fragment>
    <p className="is-capitalized employment-position">
      2004-2009: Business Analyst Arabesque - Galati, Romania
    </p>
    <Achievement className="has-text-weight-light  is-size-5">
      Gather information, evaluate business operations, determine business objectives.
    </Achievement>
    <Achievement className="has-text-weight-light  is-size-5">
    Evaluate and interpret data for business analysis and strategic decision-making.
    </Achievement>
    <Achievement className="has-text-weight-light  is-size-5">
    Analyse trends and prepare technical reports.
    </Achievement>
  </React.Fragment>
);

const TwoThousandSixteen = () => (
  <React.Fragment>
    <p className="is-capitalized employment-position">
      2015-2017: Web Developer - Ruby on Rails & JS, Gloria Jeans, Romania
    </p>
    <Achievement className="has-text-weight-light is-size-5">
      Contributed to software for product profitability which led to reduced
costs of aquisition.
    </Achievement>
    <Achievement className="has-text-weight-light is-size-5">
      Software Developer on the team that implemented sales analysis.
    </Achievement>
    <Achievement className="has-text-weight-light is-size-5">
      Implemented top customers reward marketing campaign
    </Achievement>
    <p>
      <span className="tech-used is-capitalized is-size-7">
        Tech: Ruby on Rails, Redis, Elastic Search, Jquery, HAML, MySQL
      </span>
    </p>
  </React.Fragment>
)

const TwoThousandSeventeen = () => (
  <React.Fragment>
    <p className="is-capitalized employment-position">
      2016-2017: Full Stack Developer - JS, Achiral.io, Romania.
    </p>
    <Achievement className="has-text-weight-light  is-size-5">
      Built business analytics app that extracted data from Excel sheets.
    </Achievement>
    <Achievement className="has-text-weight-light  is-size-5">
      Built UIs with charts for various key business indicators
    </Achievement>
    <p>
      <span className="tech-used is-capitalized is-size-7">
        Tech: React, MobX, Ruby on Rails, Bootstrap/Bulma, Jest, Postgresql,
        Json Web Tokens
      </span>
    </p>
  </React.Fragment>
);

const TwoThousandEighteen = () => (
  <React.Fragment>
    <p className="is-capitalized employment-position">
      2017-2018: Full Stack Developer - Ruby on Rails & JS, MEOW Stores - Nederland
    </p>
    <Achievement className="has-text-weight-light is-size-5">
      Increased total sales revenue by implementing a custom sales analysis.
    </Achievement>
    <Achievement className="has-text-weight-light is-size-5">
      Boost sales by 8% through email campaign for active customers.
    </Achievement>
    <Achievement className="has-text-weight-light is-size-5">
      Demonstrated a React E-Commerce app that would increase sales by
providing a better user experience.
    </Achievement>
    <p>
      <span className="tech-used is-capitalized is-size-7">
        Tech: React, MobX, Ruby on Rails, Bootstrap/Bulma, Jest, Postgresql,
        Json Web Tokens, Sass, various API’s (AWS S3, Stripe, Cloudinary)
      </span>
    </p>
  </React.Fragment>
);

const Employment = () => (
  <div className="column">
    <p className="subtitle cv-heading">Employment</p>
    <TwoThousandEighteen />
    <br />
    <TwoThousandSeventeen />
    <br />
    <TwoThousandSixteen />
    <br />
    <TwoThousandEight />
    <br />
  </div>
);

export default Employment;
