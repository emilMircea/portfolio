import React from 'react';
import { IoIosMail } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMdMap } from "react-icons/io";

const Info = () => (
  <div className="column contact-info is-half is-offset-one-quarter has-text-centered">
    <p className='is-flex' style={{alignItems: 'center', justifyContent: 'center'}}>
    <span className="icon">
      <IoMdMap />
    </span>
      Barcelona, Spain
    </p>
    <p className='is-flex' style={{alignItems: 'center', justifyContent: 'center'}}>
      <span className="icon">
        <IoIosMail />
      </span>
      emil-mircea@protonmail.com
    </p>
    <p className='is-flex' style={{alignItems: 'center', justifyContent: 'center'}}>
      <span className="icon">
        <IoIosPhonePortrait />
      </span>
      +34 615 248 763
    </p>
  </div>
);

export default Info ;
