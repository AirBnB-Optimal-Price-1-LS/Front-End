import React from 'react';
import './App.css';

import { Redirect, Switch, Route, Link } from "react-router-dom";

import Login from './components/login/Login';
import Register from './components/login/Register';

function App() {
  return (
    <div className="App">
      <h1><ion-icon name="pin"></ion-icon>Airbnb Optimal Price</h1>
      <div>
        {/* Register - Login */}
        <Switch>
          <Route path='/login' render={props => <Login {...props} />}/>
          <Route path='/register' render={props => <Register {...props}/>}/>
          <Redirect from="/" to="login" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
