import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Counter from "./pages/Counter";
import NotFound from "./pages/NotFound";

import "./App.scss";

const App: FC = () => (
  <div className="app">
    <Router>
      <Switch>
        <Route exact path="/" component={Counter} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </div>
);

export default App;
