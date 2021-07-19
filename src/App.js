import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import Photo from "./components/photo";
import Home from "./components/home";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <Switch>
            <Route path="/photo">
              <Photo/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
