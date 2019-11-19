import React, { useState } from "react";
import { axiosWithAuth } from "../../axiosWithAuth/axiosWithAuth";
import { NavLink } from "react-router-dom";
import "./login.css";

let credential = {
  username: "",
  password: ""
};
let loggedUserId = {
  UserId: 0
};

const Login = props => {
  console.log("LOGIN PROPS:", props);
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
        localStorage.setItem("userId", res.data.user_id);
        // props.setLoggedInUserId({
        //   ...userId,
        //   UserId: res.data.user_id
        // });
        //redirect
        props.history.push("/dashboard");
        console.log(res);
      })
      .catch(err => console.log(err));
  };

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
