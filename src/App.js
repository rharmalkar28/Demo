import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Home from "./Pages/Home";
import { StateProvider } from './Context';

export default function App() {
  return (
    <div className="App">
      <StateProvider>
        <Router>
          <Switch>
            <Route path="/page1">
              <Page1 />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router></StateProvider>
    </div>
  );
}
