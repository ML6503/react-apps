import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Timer from "./pages/Timer";

export default function Routers() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/timer">
        <Timer />
      </Route>
    </Switch>
  );
}
