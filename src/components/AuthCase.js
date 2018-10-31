import React from "react";

const AuthCase = () => (
  <div className="animated fadeIn case-wrapper">
    <p className="subtitle has-text-grey is-uppercase has-text-weight-semibold">
      Authentication in Redux - Case Study
    </p>
    <p>
      Redux solution for authentication that offers access to protected routes.
      Uses react-router 4 as router, redux-saga for async requests and formik
      for login forms which include validation.
    </p>
  </div>
);

export default AuthCase;
