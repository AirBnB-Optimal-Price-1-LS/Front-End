import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";

//components
import Login from "./components/Login&Reg/Login";
import Register from "./components/Login&Reg/Register";
import DashBoard from "./components/DashBoard/DashBoard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

//styles
import "./App.css";

const App = () => {
  const [userId, setUserId] = useState();
  console.log("IN APP", userId);

  useEffect(() => {
    setUserId(window.localStorage.getItem("userId"));
  }, []);

  return (
    <>
      <Switch>
        <Route
          exact
          path="/login"
          render={props => <Login {...props} setUserId={setUserId} />}
        />
        <Route
          exact
          path="/register"
          render={props => <Register {...props} />}
        />
        <Redirect exact from="/" to="login" />
      </Switch>
      <PrivateRoute
        path="/Dashboard"
        component={() => <DashBoard userId={userId} />}
      />
    </>
  );
};

export default App;
