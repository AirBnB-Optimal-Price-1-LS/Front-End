//node modules
import React, { useState } from "react";

import { axiosWithAuth } from "../../axiosWithAuth/axiosWithAuth";
import "./login.css";

import LoginForm from "./formik/LoginForm";

const Login = props => {
  //state
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  
  return (
    <div className="login">
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;






//  //helper functions
//  const handleChange = e => {
//   console.log(e.target.value);
//   setCredentials({
//     ...credentials,
//     [e.target.name]: e.target.value
//   });
// };

// const login = e => {
//   e.preventDefault();
//   axiosWithAuth()
//     .post("/auth/login", credentials)
//     .then(res => {
//       //set token
//       localStorage.setItem("token", res.data.token);
//       //redirect
//       props.history.push("/protected");
//     })
//     .catch(err => console.log(err));
// };