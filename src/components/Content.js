import React from "react";
import {Route} from 'react-router-dom'


const AuthCase = () => (
  <h2>
    Redux solution for authentication that offers access to protected routes.
    Uses react-router 4 as router, redux-saga for async requests and formilk
    for login forms which include validation.
  </h2>
);

const DataCase = () => (
  <h2>
    React solution for client-side Data Analysis. Makes possible uploading excel files and constructing charts to identify relevant trends. Below a chart that shows sales per product.
  </h2>
);

const EcommCase = () => (
  <h2>
    React solution for E-Commerce. State management with MobX, authentication with JWT, forms with Formik. Fast responsive e-comm solution that can be easily adapted to any company that wants to sell products online.
  </h2>
);

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <AuthCase />
  },
  {
    path: "/auth",
    exact: true,
    main: () => <AuthCase />
  },
  {
    path: "/data",
    main: () => <DataCase />
  },
  {
    path: "/ecomm",
    main: () => <EcommCase />
  }
];

const Content = () => (
  <div className="Content animated bounce">
    {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
  </div>
);

export default Content;
