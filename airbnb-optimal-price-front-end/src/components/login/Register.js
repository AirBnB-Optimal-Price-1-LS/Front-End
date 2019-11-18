import React from 'react';

import { Link } from 'react-router-dom';

function Register() {
    return(
        <>
            <h1>Register Form</h1>
            <Link to='/login'>Login</Link>
        </>
    );
}

export default Register;