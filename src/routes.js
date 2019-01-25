import React from "react";
import { Switch, Route } from "react-router-dom";

import NoRoute from "./components/404";
import Home from "./containers/home_container.js";
import Layout from "./hoc/layout.js";

const Routes = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:name" exact component={NoRoute} />
      <Route component={NoRoute} />
    </Switch>
  </Layout>
);

export default Routes;
