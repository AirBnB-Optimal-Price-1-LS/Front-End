import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

let credential = {
  username: "",
  password: ""
};

const Register = () => {
  const [credentials, setCredentials] = useState(credential);

  const handleChange = e => {
    console.log(e.target.value);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const register = e => {
    e.preventDefault();
    axios
      .post(
        "https://buildweek-airbnb.herokuapp.com/api/auth/register",
        credentials
      )
      // .then(res => {
      //   //set token
      //   localStorage.setItem("token", res.data.payload);
      //   //redirect
      //   this.props.history.push("/protected");
      // })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  console.log(credentials);
  return (
    <Router>
      <div className="login">
        <form onSubmit={register}>
          <div className="inputs">
            <p>Username:</p>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={credentials.username}
              onChange={handleChange}
            />
            <p>Password:</p>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <button className="regis-btn">Register</button>
        </form>
      </div>
    </Router>
  );
};

export default Register;
