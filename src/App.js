import React from "react";
import "animate.css";
import "./App.css";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router-dom";
import CVComponent from "./components/CV/CVComponent";
import CaseStudies from "./components/CaseStudies";



const App = props => (
  <div className="wrapper">
    <Switch>
      <Route exact path="/cv" component={CVComponent} />
      <Route path="/" component={CaseStudies} />
      {/* <Route component={NoMatch} /> */}
    </Switch>
  </div>
);

const PropsRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={renderProps => <App {...renderProps} {...props} />}
  />
);

export default PropsRoute;
