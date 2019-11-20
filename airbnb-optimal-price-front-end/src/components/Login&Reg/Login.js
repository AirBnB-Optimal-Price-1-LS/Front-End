//node modules
import React, { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from "../../axiosWithAuth/axiosWithAuth";
import { NavLink } from "react-router-dom";
import "./login.css";

const Schema = Yup.object().shape({
  username: Yup.string()
      .required('Enter your username'),
  password: Yup.string()
      .required('Enter your password')
});

const Login = props => {
  //state
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const submit = (values, tools) => {
    console.log(values, tools);
        axiosWithAuth().post('/auth/login', values)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.user_id);
            props.history.push('/Dashboard/Home');
        })
        .catch(err => console.log(err));
}
  
  return (
    <div className="login">
      <h1>Login</h1>
      <Formik
        initialValues={{
            username: '',
            password: ''
        }}
        validationSchema={Schema}
        onSubmit={(values, tools) =>{
            submit(values, tools);
        }}
        >
            {({errors, touched, isSubmitting, handleSubmit}) => 
                <Form onSubmit={handleSubmit}>
                    <p>Username:</p>
                    <Field type='text' name='username' placeholder='username'/>
                    {errors.username && touched.username ? <div style={{color: 'red'}}>{errors.username}</div> : null}
                    <p>Password:</p>
                    <Field type='password' name='password' placeholder='password'/>
                    {errors.password && touched.password ? <div style={{color: 'red'}}>{errors.password}</div> : null}
                    <div>
                        <button type='submit' disabled={isSubmitting}>Submit</button>
                        <Link to='/register'><button>Register</button></Link>
                    </div>
                </Form>
            }
        </Formik>
    </div>
  );
};

export default Login;