import React from 'react';

//node modules
import Styled from 'styled-components';

//components
import LoginForm from './form/LoginForm';

//images
import SVG from '../../images/undraw_adventure_4hum.svg';

//styles
const Flex = Styled.div`
    display: flex;
`;

const Illustration = Styled.img`
    width: 65%;
`;

function Login() {
    return(
        <Flex>
            <Illustration src={SVG} alt='illustration' />
            <LoginForm />
        </Flex>
    );
}

export default Login;