//node modules
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//components
import Login from "./components/Login&Reg/Login";
import Register from "./components/Login&Reg/Register";
import InitialPage from "./components/InitialPage/InitialPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

//styles
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <Switch>
        <Route exact path="/login" render={props => <Login {...props}/>} />
        <Route exact path="/register" render={props => <Register {...props}/>} />
      </Switch>
      <PrivateRoute path="/protected" component={() => <InitialPage />} />
    </div>
  );
};

export default LoginPage;
