import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./Components/home";
import History from "./Components/history";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route
          exact
          path="/log"
          component={History}
        />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
