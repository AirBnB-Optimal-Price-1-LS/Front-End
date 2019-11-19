import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

//styles
const FormContainer = Styled.div`
    padding-left: 32px;
`;

const Heading = Styled.div`
    margin-bottom: 64px;
`;

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
            <FormContainer>
                <Heading>
                    <h2>Login</h2>
                </Heading>
                <Form>
                    <div>
                        <ion-icon name="person"></ion-icon>
                        <Field type='text' name='username' placeholder='username'/>
                    </div>
                    <div>
                        <ion-icon name="lock"></ion-icon>
                        <Field type='password' name='password' placeholder='password'/>
                    </div>
                    <div className='form-buttons'>
                        <button type='submit' disabled={isSubmitting}>Login</button>
                        <Link to='/register'><button>Register</button></Link>
                    </div>
                </Form>
            </FormContainer>
        }
        </Formik>
    );
}

export default LoginForm;