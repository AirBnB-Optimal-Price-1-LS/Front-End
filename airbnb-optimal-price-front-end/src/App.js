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
import PrivateRoute from "./PrivateRoute/PrivateRoute";

//styles
import "./App.css";

const App = () => {
  return (
    <div className="login-page">
      <Switch>
        <Route exact path="/login" render={props => <Login {...props}/>} />
        <Route exact path="/register" render={props => <Register {...props}/>} />
      </Switch>
      <PrivateRoute path="/Dashboard" component={() => <DashBoard />} />
    </div>
  );
};

export default App;
