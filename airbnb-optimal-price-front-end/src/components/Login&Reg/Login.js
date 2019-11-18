import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { axiosWithAuth } from "../../axiosWithAuth/axiosWithAuth";
import "./login.css";

let credential = {
  username: "",
  password: ""
};

const Login = props => {
  const [credentials, setCredentials] = useState(credential);

  const handleChange = e => {
    console.log(e.target.value);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", credentials)
      .then(res => {
        //set token
        localStorage.setItem("token", res.data.token);
        //redirect
        props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  // const register = () => {
  //   props.history.push("/register");
  // };

  console.log(credentials);
  return (
    <div className="login">
      <form onSubmit={login}>
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
        <button className="login-btn">Login</button>
        <div className="regis-container">
          <NavLink to="/register">Register</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
