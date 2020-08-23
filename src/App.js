import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
        <div className="leftDiv">
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page1">Page1</Link>
        </li>
        <li>
          <Link to="/page2">Page2</Link>
        </li>
      </ul>
        </div>
        <div className="rightBg floatLeft" >
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
        </div>
        </Router>

        </StateProvider>
    </div>
  );
}
