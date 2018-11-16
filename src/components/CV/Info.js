import React from 'react';

import styled from 'styled-components'
// icons
import mapIcon from '../../images/map-icon.svg'
import mailIcon from '../../images/mail-icon.svg'
import phoneIcon from '../../images/phone-icon.svg'

const IconImage = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 8px;
`;

const Info = () => (
  <div className="column contact-info is-half is-offset-one-quarter has-text-centered">
    <p
      className="is-flex"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <span className="icon">
        <IconImage src={mapIcon} alt="map icon" />
      </span>
      Barcelona, Spain
    </p>
    <p
      className="is-flex"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <span className="icon">
        <IconImage src={mailIcon} alt="mail icon" />
      </span>
      emil-mircea@protonmail.com
    </p>
    <p
      className="is-flex"
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <span className="icon">
        <IconImage src={phoneIcon} alt="phone icon" />
      </span>
      +34 615 248 763
    </p>
  </div>
);

export default Info ;
