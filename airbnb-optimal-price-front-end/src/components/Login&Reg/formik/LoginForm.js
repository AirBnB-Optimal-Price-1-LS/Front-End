//node modules
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Schema = Yup.object().shape({
    username: Yup.string()
        .required('Enter your username'),
    password: Yup.string()
        .required('Enter your password')
});

function LoginForm() {

    //state
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    return(
        <Formik
        initialValues={{
            username: '',
            password: ''
        }}
        validationSchema={Schema}
        onSubmit={(values, tools) =>{
            console.log(values);
            setCredentials(values);
            tools.resetForm();
            // POST /api/auth/login
        }}
        >
            {({errors, touched, isSubmitting}) => 
                <Form>
                    <p>Username:</p>
                    <Field type='text' name='username' placeholder='username'/>
                    <p>Password:</p>
                    <Field type='password' name='password' placeholder='password'/>
                    <div>
                        <button type='submit' disabled={isSubmitting}>Submit</button>
                        <Link to='/register'><button>Register</button></Link>
                    </div>
                </Form>
            }
        </Formik>
    );
}

export default LoginForm;