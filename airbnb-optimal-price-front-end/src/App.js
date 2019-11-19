import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import "./App.css";

//components
import Login from "./components/Login&Reg/Login";
import Register from "./components/Login&Reg/Register";
import DashBoard from "./components/DashBoard/DashBoard";

const App = props => {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Switch>
            {/* <Route exact path="/" component={<Login />} /> */}
            <Route
              path="/login"
              render={props => {
                return <Login {...props} />;
              }}
            />
            <Route path="/register" component={Register} />
          </Switch>
          <PrivateRoute path="/Dashboard" component={() => <DashBoard />} />
        </div>
      </Router>
    </div>
  );
};

export default App;
