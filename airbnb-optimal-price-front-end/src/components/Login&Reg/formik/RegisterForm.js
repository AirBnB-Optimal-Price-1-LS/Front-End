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

function RegisterForm() {

    //state
    const [registerData, setRegisterData] = useState({
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
            setRegisterData(values);
            tools.resetForm();
            // POST /api/auth/register
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
                        <Link to='/login'><button>Login</button></Link>
                    </div>
                </Form>
            }
        </Formik>
    );
}

export default RegisterForm;