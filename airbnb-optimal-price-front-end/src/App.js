import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
// import { axiosWithAuth } from "./axiosWithAuth/axiosWithAuth";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import "./App.css";

//components
import Login from "./components/Login&Reg/Login";
import Register from "./components/Login&Reg/Register";
import InitialPage from "./components/InitialPage/InitialPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
          <PrivateRoute path="/protected" component={() => <InitialPage />} />
        </div>
      </Router>
    </div>
  );
};

export default App;
