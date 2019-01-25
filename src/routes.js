import React from "react";
import { Switch, Route } from "react-router-dom";

import NoRoute from "./components/404";
import Home from "./containers/home_container.js";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={NoRoute} />
  </Switch>
);

export default Routes;
