import React from "react";
import styled from "styled-components";
import calendarIcon from '../../images/calendar-icon.svg'

const Achievement = styled.li`
  margin: 1rem;
  list-style-type: circle;
`;

const CenteredParag = styled.p`
  display: flex;
  align-items: center;
`;


const IconImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const TechUsed = props => (
  <p>
    <span className="tech-used is-capitalized is-size-7">{props.children}</span>
  </p>
);

const TwoThousandEight = () => (
  <React.Fragment>
    <CenteredParag className="is-capitalized employment-position is-flex">
      <span className="icon">
        <IconImage src={calendarIcon} alt="calendar icon" />
      </span>
      2004-2009: Business Analyst Arabesque - Galati, Romania
    </CenteredParag>
    <ul className="achievements">
      <Achievement className="has-text-weight-light is-size-5">
        Gather information, evaluate business operations, determine business
        objectives.
      </Achievement>
      <Achievement className="has-text-weight-light is-size-5">
        Evaluate and interpret data for business analysis and strategic
        decision-making.
      </Achievement>
      <Achievement className="has-text-weight-light is-size-5">
        Analyse trends and prepare technical reports.
      </Achievement>
    </ul>
  </React.Fragment>
);

const TwoThousandFifteen = () => (
  <React.Fragment>
    <CenteredParag className="is-capitalized employment-position is-flex">
      <span className="icon">
        <IconImage src={calendarIcon} alt="calendar icon" />
      </span>
      2015-2016: Web Developer, Gloria Jeans, Romania
    </CenteredParag>
    <ul className="achievements">
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
    </ul>
    <TechUsed>
      Tech: Ruby on Rails, Redis, Elastic Search, Jquery, HAML, MySQL
    </TechUsed>
  </React.Fragment>
);

const TwoThousandSeventeen = () => (
  <React.Fragment>
    <CenteredParag className="is-capitalized employment-position is-flex">
      <span className="icon">
        <IconImage src={calendarIcon} alt="calendar icon" />
      </span>
      2016-2017: Full Stack Developer, Achiral.io, Romania.
    </CenteredParag>
    <ul className="achievements">
      <Achievement className="has-text-weight-light  is-size-5">
        Sped business decision making by building analytics app that extracted
        data from Excel sheets.
      </Achievement>
      <Achievement className="has-text-weight-light  is-size-5">
        Helped business insights by building UIs with custom charts for various
        key business indicators
      </Achievement>
    </ul>
    <TechUsed>
      Tech: React, MobX, Ruby on Rails, Bootstrap/Bulma, Jest, Postgresql, Json
      Web Tokens
    </TechUsed>
  </React.Fragment>
);

const TwoThousandEighteen = () => (
  <React.Fragment>
    <CenteredParag className="is-capitalized employment-position">
      <span className="icon">
        <IconImage src={calendarIcon} alt="calendar icon" />
      </span>
      2017-2018: Full Stack Developer, MEOW Stores - Nederland
    </CenteredParag>
    <ul className="achievements">
      <Achievement className="has-text-weight-light is-size-5">
        Decreased inventory costs by 5% through implementing a custom sales
        analysis which yielded trending products and best sellers per quarter.
      </Achievement>
      <Achievement className="has-text-weight-light is-size-5">
        Increased sales by 8% through email campaign for active customers.
      </Achievement>
      <Achievement className="has-text-weight-light is-size-5">
        Demonstrated a React E-Commerce solution focused on better user
        experience to increase conversion rates.
      </Achievement>
    </ul>
    <TechUsed>
      Tech: React, MobX, Ruby on Rails, Bootstrap/Bulma, Jest, Postgresql, Json
      Web Tokens, Sass, various API’s (AWS S3, Stripe, Cloudinary)
    </TechUsed>
  </React.Fragment>
);

const Employment = () => (
  <div className="column">
    <p className="subtitle cv-heading">Employment</p>
    <TwoThousandEighteen />
    <br />
    <TwoThousandSeventeen />
    <br />
    <TwoThousandFifteen />
    <br />
    <TwoThousandEight />
    <br />
  </div>
);

export default Employment;
