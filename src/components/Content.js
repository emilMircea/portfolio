import React from "react";
import {Route} from 'react-router-dom'
import routes from '../constants/routes'

const Content = () => (
  <div className="Content animated bounce">
    {routes.map((route, index) => (
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
