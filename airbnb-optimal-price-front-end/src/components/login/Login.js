import React from 'react';

import { Link } from 'react-router-dom';

import LoginForm from './form/LoginForm';

function Login() {
    return(
        <div>
            <img src={'../../../public/images/undraw_adventure_4hum.svg'} alt='illustration' />
            <LoginForm />
        </div>
    );
}

export default Login;