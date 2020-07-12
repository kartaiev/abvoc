import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./Global";
import Home from "./pages/Home";

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <GlobalStyle />
  </>
);

export default App;
