//node modules
import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import axios from "axios";
import "./login.css";

const Schema = Yup.object().shape({
  username: Yup.string()
      .required('Enter your username'),
  password: Yup.string()
      .required('Enter your password')
});

const Register = (props) => {
  //state
  const [registerData, setRegisterData] = useState({
    username: '',
    password: ''
  });

  return (
    <div className="login">
      <h1>Register</h1>
      <Formik
        initialValues={{
            username: '',
            password: ''
        }}
        validationSchema={Schema}
        onSubmit={(values, tools) =>{
            console.log(values);
            axios.post('https://buildweek-airbnb.herokuapp.com/api/auth/register', values)
            .then(res => console.log(res))
            .catch(err => console.log(err));
            tools.resetForm();
            props.history.push('/login');
        }}
        >
            {({errors, touched, isSubmitting}) => 
                <Form>
                    <p>Username:</p>
                    <Field type='text' name='username' placeholder='username'/>
                    {errors.username && touched.username ? <div style={{color: 'red'}}>{errors.username}</div> : null}
                    <p>Password:</p>
                    <Field type='password' name='password' placeholder='password'/>
                    {errors.password && touched.password ? <div style={{color: 'red'}}>{errors.password}</div> : null}
                    <div>
                        <button type='submit' disabled={isSubmitting}>Submit</button>
                        <Link to='/login'><button>Login</button></Link>
                    </div>
                </Form>
            }
        </Formik>
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