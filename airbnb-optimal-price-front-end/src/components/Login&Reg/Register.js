import React, { useState } from "react";

import axios from "axios";
import "./login.css";

import RegisterForm from './formik/RegisterForm';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  return (
    <div className="login">
      <h1>Register</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;








// const handleChange = e => {
//   console.log(e.target.value);
//   setCredentials({
//     ...credentials,
//     [e.target.name]: e.target.value
//   });
// };

// const register = e => {
//   e.preventDefault();
//   axios
//     .post(
//       "https://buildweek-airbnb.herokuapp.com/api/auth/register",
//       credentials
//     )
//     // .then(res => {
//     //   //set token
//     //   localStorage.setItem("token", res.data.payload);
//     //   //redirect
//     //   this.props.history.push("/protected");
//     // })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// };