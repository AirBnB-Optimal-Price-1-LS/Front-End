import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Schema = Yup.object().shape({
    username: Yup.string()
        .required('Enter your username'),
    password: Yup.string()
        .required('Enter your password')
})

function LoginForm() {
    return(
        <Formik
        initialValues={{
            username: '',
            password: ''
        }}
        validationSchema={Schema}
        onSubmit={(values, tools) => {
            console.log(values, tools);
            // Send Credentials
        }}
        >
        {({errors, touched, isSubmitting}) => 
            <Form>
                <Field type='text' name='username' placeholder='username'/>
                <Field type='password' name='password' placeholder='password'/>
                <div className='form-buttons'>
                    <button type='submit' disabled={isSubmitting}>Login</button>
                    <Link to='/register'><button>Register</button></Link>
                </div>
            </Form>
        }
        </Formik>
    );
}

export default LoginForm;